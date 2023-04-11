import { SpeakeasyBase } from "../../../internal/utils";
import { SourceTypeEnum } from "./sourcetypeenum";
export declare class DescribeEventsMessage extends SpeakeasyBase {
    duration?: number;
    endTime?: Date;
    eventCategories?: string[];
    marker?: string;
    maxRecords?: number;
    sourceIdentifier?: string;
    sourceType?: SourceTypeEnum;
    startTime?: Date;
}
