import { SpeakeasyBase } from "../../../internal/utils";
import { SourceTypeEnum } from "./sourcetypeenum";
/**
 * <p/>
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
