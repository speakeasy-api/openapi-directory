import { SpeakeasyBase } from "../../../internal/utils";
import { AppExternalCpd } from "./appexternalcpd";
import { DNSRuleDescriptor } from "./dnsruledescriptor";
import { FeatureDependency } from "./featuredependency";
import { LatencyDescriptor } from "./latencydescriptor";
import { ServiceDependency } from "./servicedependency";
import { ServiceDescriptor } from "./servicedescriptor";
import { TrafficRuleDescriptor } from "./trafficruledescriptor";
import { TransportDependency } from "./transportdependency";
/**
 * Content of the AppD is returned.
 */
export declare class AppD extends SpeakeasyBase {
    /**
     * Identifier of this MEC application descriptor. This attribute shall be globally unique. See note 1.
     */
    appDId: string;
    /**
     * Describes DNS rules the MEC application requires.
     */
    appDNSRule?: DNSRuleDescriptor[];
    /**
     * Identifies the version of the application descriptor.
     */
    appDVersion: string;
    /**
     * Human readable description of the MEC application.
     */
    appDescription: string;
    /**
     * Describes external interface(s) exposed by this MEC application.
     */
    appExtCpd?: AppExternalCpd[];
    /**
     * Describes features a MEC application may use if available.
     */
    appFeatureOptional?: FeatureDependency[];
    /**
     * Describes features a MEC application requires to run.
     */
    appFeatureRequired?: FeatureDependency[];
    /**
     * Human readable name for the MEC application.
     */
    appInfoName?: string;
    appLatency?: LatencyDescriptor;
    /**
     * Name to identify the MEC application.
     */
    appName: string;
    /**
     * Provider of the application and of the AppD.
     */
    appProvider: string;
    /**
     * Describes services a MEC application may use if available.
     */
    appServiceOptional?: ServiceDependency[];
    /**
     * Describes services a MEC application is able to produce to the platform or other MEC applications. Only relevant for service-producing apps.
     */
    appServiceProduced?: ServiceDescriptor[];
    /**
     * Describes services a MEC application requires to run.
     */
    appServiceRequired?: ServiceDependency[];
    /**
     * Identifies the version of software of the MEC application.
     */
    appSoftVersion: string;
    /**
     * Describes traffic rules the MEC application requires.
     */
    appTrafficRule?: TrafficRuleDescriptor[];
    /**
     * NFV
     */
    changeAppInstanceStateOpConfig?: string;
    /**
     * Identifies version(s) of MEC system compatible with the MEC application described in this version of the AppD.
     */
    mecVersion: string[];
    /**
     * Ref NFV
     */
    swImageDescriptor: string;
    /**
     * NFV
     */
    terminateAppInstanceOpConfig?: string;
    /**
     * Transports, if any, that this application requires to be provided by the platform. These transports will be used by the application to deliver services provided by this application. Only relevant for service-producing apps. See note 2.
     */
    transportDependencies?: TransportDependency[];
    /**
     * Ref NFV
     */
    virtualComputeDescriptor: string;
    /**
     * Defines descriptors of virtual storage resources to be used by the MEC application.
     */
    virtualStorageDescriptor?: string[];
}
