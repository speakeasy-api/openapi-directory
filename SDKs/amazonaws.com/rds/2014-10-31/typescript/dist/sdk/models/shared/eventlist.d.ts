import { SpeakeasyBase } from "../../../internal/utils";
import { SourceTypeEnum } from "./sourcetypeenum";
/**
 * This data type is used as a response element in the <a href="https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeEvents.html">DescribeEvents</a> action.
 */
export declare class EventList extends SpeakeasyBase {
    date?: Date;
    eventCategories?: string[];
    message?: string;
    sourceArn?: string;
    sourceIdentifier?: string;
    sourceType?: SourceTypeEnum;
}
