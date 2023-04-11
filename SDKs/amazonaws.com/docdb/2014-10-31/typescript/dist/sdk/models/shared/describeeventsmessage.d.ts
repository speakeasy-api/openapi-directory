import { SpeakeasyBase } from "../../../internal/utils";
import { FilterList } from "./filterlist";
import { SourceTypeEnum } from "./sourcetypeenum";
/**
 * Represents the input to <a>DescribeEvents</a>.
 */
export declare class DescribeEventsMessage extends SpeakeasyBase {
    duration?: number;
    endTime?: Date;
    eventCategories?: string[];
    filters?: FilterList[];
    marker?: string;
    maxRecords?: number;
    sourceIdentifier?: string;
    sourceType?: SourceTypeEnum;
    startTime?: Date;
}
