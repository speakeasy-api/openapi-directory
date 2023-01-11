package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DescribeStackSummaryResult
 * Contains the response to a <code>DescribeStackSummary</code> request.
**/
public class DescribeStackSummaryResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StackSummary")
    public StackSummary stackSummary;
    public DescribeStackSummaryResult withStackSummary(StackSummary stackSummary) {
        this.stackSummary = stackSummary;
        return this;
    }
}