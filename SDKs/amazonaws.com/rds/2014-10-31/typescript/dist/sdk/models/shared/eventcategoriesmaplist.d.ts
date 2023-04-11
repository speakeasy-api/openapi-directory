import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains the results of a successful invocation of the <a href="https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeEventCategories.html">DescribeEventCategories</a> operation.
 */
export declare class EventCategoriesMapList extends SpeakeasyBase {
    eventCategories?: string[];
    sourceType?: string;
}
