import { SpeakeasyBase } from "../../../internal/utils";
import { StatisticalIssueStatusEnum } from "./statisticalissuestatusenum";
/**
 *  Entity that comprises information on large gaps between consecutive timestamps in data.
 */
export declare class LargeTimestampGaps extends SpeakeasyBase {
    maxTimestampGapInDays?: number;
    numberOfLargeTimestampGaps?: number;
    status: StatisticalIssueStatusEnum;
}
