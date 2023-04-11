import { SpeakeasyBase } from "../../../internal/utils";
import { AppPkgInfoLinks } from "./apppkginfolinks";
import { AppPkgOperationalStateEnum } from "./apppkgoperationalstateenum";
import { Checksum } from "./checksum";
import { OnboardingStateEnum } from "./onboardingstateenum";
import { UsageStateEnum } from "./usagestateenum";
/**
 * 'The data type AppPkgInfo represents the parameters for an application package resource'
 */
export declare class AppPkgInfo extends SpeakeasyBase {
    /**
     * Links to resources related to this resource.
     */
    links: AppPkgInfoLinks;
    /**
     * Additional information of application package artifacts that are not application software images. Type is TBD
     */
    additionalArtifacts?: any;
    /**
     * Identifier of this MEC application descriptor. This attribute shall be globally unique.
     */
    appDId: string;
    /**
     * Identifies the version of the application descriptor.
     */
    appDVersion: string;
    /**
     * Name to identify the MEC application.
     */
    appName: string;
    /**
     * Provider of the application and of the AppD.
     */
    appProvider?: string;
    /**
     * Software version of the application. This is updated when there is any change to the software in the onboarded application package.
     */
    appSoftwareVersion: string;
    checksum: Checksum;
    /**
     * Identifier of the onboarded application package.
     */
    id: string;
    /**
     * Onboarding state of application package
     */
    onboardingState: OnboardingStateEnum;
    /**
     * Operational state of the onboarded application package: Ã¢â‚¬Â¢ENABLED: the application package can be used for instantiation of new application instances. Ã¢â‚¬Â¢DISABLED: the application package cannot be used for further application instantiation requests.
     */
    operationalState: AppPkgOperationalStateEnum;
    /**
     * Information of application software image in application package. Type is TBD
     */
    softwareImages: any;
    /**
     * Usage state of the onboarded instance of the application package
     */
    usageState: UsageStateEnum;
    /**
     * 'This data type represents a list of key-value pairs. The order of the pairs in the list is not significant. In JSON, a set of key-value pairs is represented as an object. It shall comply with the provisions defined in clause 4 of IETF RFC 8259'
     */
    userDefinedData?: Record<string, any>;
}
