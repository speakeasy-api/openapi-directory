import { SpeakeasyBase } from "../../../internal/utils";
import { AccountGateResult } from "./accountgateresult";
import { StackSetOperationResultStatusEnum } from "./stacksetoperationresultstatusenum";
/**
 * The structure that contains information about a specified operation's results for a given account in a given Region.
 */
export declare class StackSetOperationResultSummary extends SpeakeasyBase {
    account?: string;
    accountGateResult?: AccountGateResult;
    organizationalUnitId?: string;
    region?: string;
    status?: StackSetOperationResultStatusEnum;
    statusReason?: string;
}
