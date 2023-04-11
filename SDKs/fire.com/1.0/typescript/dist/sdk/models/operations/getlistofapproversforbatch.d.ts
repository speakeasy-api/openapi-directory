import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetListofApproversForBatchRequest extends SpeakeasyBase {
    batchUuid: string;
}
export declare class GetListofApproversForBatchBatchApproversApprovals extends SpeakeasyBase {
    /**
     * User email address
     */
    emailAddress?: string;
    firstName?: string;
    lastName?: string;
    /**
     * The datestamp of the last action on this batch - ISO format - e.g. 2018-04-04T10:48:53.540Z
     */
    lastUpdated?: Date;
    mobileNumber?: string;
    status?: string;
    /**
     * User id assigned by fire.com
     */
    userId?: number;
}
/**
 * A list of approvers for this batch.
 */
export declare class GetListofApproversForBatchBatchApprovers extends SpeakeasyBase {
    approvals?: GetListofApproversForBatchBatchApproversApprovals[];
}
export declare class GetListofApproversForBatchResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * A list of approvers for this batch.
     */
    batchApprovers?: GetListofApproversForBatchBatchApprovers;
}
