import { SpeakeasyBase } from "../../../internal/utils";
import { AwsOpenSearchServiceDomainMasterUserOptionsDetails } from "./awsopensearchservicedomainmasteruseroptionsdetails";
/**
 * Provides information about domain access control options.
 */
export declare class AwsOpenSearchServiceDomainAdvancedSecurityOptionsDetails extends SpeakeasyBase {
    enabled?: boolean;
    internalUserDatabaseEnabled?: boolean;
    masterUserOptions?: AwsOpenSearchServiceDomainMasterUserOptionsDetails;
}
