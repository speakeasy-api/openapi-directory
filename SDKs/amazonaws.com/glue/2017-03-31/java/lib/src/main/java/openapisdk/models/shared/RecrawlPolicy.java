package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RecrawlPolicy
 * When crawling an Amazon S3 data source after the first crawl is complete, specifies whether to crawl the entire dataset again or to crawl only folders that were added since the last crawler run. For more information, see <a href="https://docs.aws.amazon.com/glue/latest/dg/incremental-crawls.html">Incremental Crawls in Glue</a> in the developer guide.
**/
public class RecrawlPolicy {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RecrawlBehavior")
    public RecrawlBehaviorEnum recrawlBehavior;
    public RecrawlPolicy withRecrawlBehavior(RecrawlBehaviorEnum recrawlBehavior) {
        this.recrawlBehavior = recrawlBehavior;
        return this;
    }
}