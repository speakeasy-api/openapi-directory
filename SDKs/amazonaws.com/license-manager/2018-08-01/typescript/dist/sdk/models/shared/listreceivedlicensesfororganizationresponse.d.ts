import { SpeakeasyBase } from "../../../internal/utils";
import { GrantedLicense } from "./grantedlicense";
/**
 * Success
 */
export declare class ListReceivedLicensesForOrganizationResponse extends SpeakeasyBase {
    licenses?: GrantedLicense[];
    nextToken?: string;
}
