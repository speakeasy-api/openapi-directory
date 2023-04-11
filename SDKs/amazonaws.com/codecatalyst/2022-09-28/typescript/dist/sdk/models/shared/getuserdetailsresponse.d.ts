import { SpeakeasyBase } from "../../../internal/utils";
import { EmailAddress } from "./emailaddress";
/**
 * Success
 */
export declare class GetUserDetailsResponse extends SpeakeasyBase {
    displayName?: string;
    primaryEmail?: EmailAddress;
    userId?: string;
    userName?: string;
    version?: string;
}
