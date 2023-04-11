import { SpeakeasyBase } from "../../../internal/utils";
import { WarmPoolResourceStatusEnum } from "./warmpoolresourcestatusenum";
/**
 * Status and billing information about the warm pool.
 */
export declare class WarmPoolStatus extends SpeakeasyBase {
    resourceRetainedBillableTimeInSeconds?: number;
    reusedByJob?: string;
    status: WarmPoolResourceStatusEnum;
}
