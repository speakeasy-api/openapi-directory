import { SpeakeasyBase } from "../../../internal/utils";
import { AwsOpenSearchServiceDomainClusterConfigZoneAwarenessConfigDetails } from "./awsopensearchservicedomainclusterconfigzoneawarenessconfigdetails";
/**
 * Details about the configuration of an OpenSearch cluster.
 */
export declare class AwsOpenSearchServiceDomainClusterConfigDetails extends SpeakeasyBase {
    dedicatedMasterCount?: number;
    dedicatedMasterEnabled?: boolean;
    dedicatedMasterType?: string;
    instanceCount?: number;
    instanceType?: string;
    warmCount?: number;
    warmEnabled?: boolean;
    warmType?: string;
    zoneAwarenessConfig?: AwsOpenSearchServiceDomainClusterConfigZoneAwarenessConfigDetails;
    zoneAwarenessEnabled?: boolean;
}
