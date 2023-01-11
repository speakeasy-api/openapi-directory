import { SpeakeasyBase } from "../../../internal/utils";
import { SourceTypeEnum } from "./sourcetypeenum";
/**
 *  This data type is used as a response element in the <a>DescribeEvents</a> action.
**/
export declare class EventList extends SpeakeasyBase {
    date?: Date;
    eventCategories?: Record<string, any>[];
    message?: string;
    sourceArn?: string;
    sourceIdentifier?: string;
    sourceType?: SourceTypeEnum;
}
