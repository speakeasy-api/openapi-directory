import { SpeakeasyBase } from "../../../internal/utils";
import { SourceTypeEnum } from "./sourcetypeenum";
/**
 * Represents the input of a <code>DescribeEvents</code> operation.
 */
export declare class DescribeEventsMessage extends SpeakeasyBase {
    duration?: number;
    endTime?: Date;
    marker?: string;
    maxRecords?: number;
    sourceIdentifier?: string;
    sourceType?: SourceTypeEnum;
    startTime?: Date;
}
