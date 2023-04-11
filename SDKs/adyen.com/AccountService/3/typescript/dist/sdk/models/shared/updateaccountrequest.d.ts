import { SpeakeasyBase } from "../../../internal/utils";
import { UpdatePayoutScheduleRequest } from "./updatepayoutschedulerequest";
export declare class UpdateAccountRequest extends SpeakeasyBase {
    /**
     * The code of the account to update.
     */
    accountCode: string;
    payoutSchedule: UpdatePayoutScheduleRequest;
}
