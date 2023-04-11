import { SpeakeasyBase } from "../../../internal/utils";
import { AccountLimit } from "./accountlimit";
import { AccountUsage } from "./accountusage";
/**
 * Success
 */
export declare class GetAccountSettingsResponse extends SpeakeasyBase {
    accountLimit?: AccountLimit;
    accountUsage?: AccountUsage;
}
