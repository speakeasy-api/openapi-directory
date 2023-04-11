import { SpeakeasyBase } from "../../../internal/utils";
import { MonotonicityEnum } from "./monotonicityenum";
import { StatisticalIssueStatusEnum } from "./statisticalissuestatusenum";
/**
 *  Entity that comprises information on monotonic values in the data.
 */
export declare class MonotonicValues extends SpeakeasyBase {
    monotonicity?: MonotonicityEnum;
    status: StatisticalIssueStatusEnum;
}
