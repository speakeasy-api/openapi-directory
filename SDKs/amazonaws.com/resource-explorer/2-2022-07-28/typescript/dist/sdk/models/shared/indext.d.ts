import { SpeakeasyBase } from "../../../internal/utils";
import { IndexTypeEnum } from "./indextypeenum";
/**
 * <p>An index is the data store used by Amazon Web Services Resource Explorer to hold information about your Amazon Web Services resources that the service discovers. Creating an index in an Amazon Web Services Region turns on Resource Explorer and lets it discover your resources.</p> <p>By default, an index is <i>local</i>, meaning that it contains information about resources in only the same Region as the index. However, you can promote the index of one Region in the account by calling <a>UpdateIndexType</a> to convert it into an aggregator index. The aggregator index receives a replicated copy of the index information from all other Regions where Resource Explorer is turned on. This allows search operations in that Region to return results from all Regions in the account.</p>
 */
export declare class IndexT extends SpeakeasyBase {
    arn?: string;
    region?: string;
    type?: IndexTypeEnum;
}
