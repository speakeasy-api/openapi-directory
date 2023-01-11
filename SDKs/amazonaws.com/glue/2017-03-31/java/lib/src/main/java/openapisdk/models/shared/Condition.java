package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Condition
 * Defines a condition under which a trigger fires.
**/
public class Condition {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CrawlState")
    public CrawlStateEnum crawlState;
    public Condition withCrawlState(CrawlStateEnum crawlState) {
        this.crawlState = crawlState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CrawlerName")
    public String crawlerName;
    public Condition withCrawlerName(String crawlerName) {
        this.crawlerName = crawlerName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("JobName")
    public String jobName;
    public Condition withJobName(String jobName) {
        this.jobName = jobName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LogicalOperator")
    public LogicalOperatorEnum logicalOperator;
    public Condition withLogicalOperator(LogicalOperatorEnum logicalOperator) {
        this.logicalOperator = logicalOperator;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("State")
    public JobRunStateEnum state;
    public Condition withState(JobRunStateEnum state) {
        this.state = state;
        return this;
    }
}