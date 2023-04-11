import { SpeakeasyBase } from "../../../internal/utils";
import { GrantedLicense } from "./grantedlicense";
/**
 * Success
 */
export declare class ListReceivedLicensesResponse extends SpeakeasyBase {
    licenses?: GrantedLicense[];
    nextToken?: string;
}
