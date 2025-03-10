import { SpeakeasyBase } from "../../../internal/utils";
import { RecrawlBehaviorEnum } from "./recrawlbehaviorenum";
/**
 * When crawling an Amazon S3 data source after the first crawl is complete, specifies whether to crawl the entire dataset again or to crawl only folders that were added since the last crawler run. For more information, see <a href="https://docs.aws.amazon.com/glue/latest/dg/incremental-crawls.html">Incremental Crawls in Glue</a> in the developer guide.
 */
export declare class RecrawlPolicy extends SpeakeasyBase {
    recrawlBehavior?: RecrawlBehaviorEnum;
}
