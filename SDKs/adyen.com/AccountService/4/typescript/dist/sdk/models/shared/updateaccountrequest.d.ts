import { SpeakeasyBase } from "../../../internal/utils";
import { UpdatePayoutScheduleRequest } from "./updatepayoutschedulerequest";
export declare class UpdateAccountRequest extends SpeakeasyBase {
    /**
     * The code of the account to update.
     */
    accountCode: string;
    /**
     * A description of the account, maximum 256 characters.You can use alphanumeric characters (A-Z, a-z, 0-9), white spaces, and underscores `_`.
     */
    description?: string;
    payoutSchedule?: UpdatePayoutScheduleRequest;
}
