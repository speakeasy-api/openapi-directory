package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DescribeStacksResult
 * Contains the response to a <code>DescribeStacks</code> request.
**/
public class DescribeStacksResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Stacks")
    public Stack[] stacks;
    public DescribeStacksResult withStacks(Stack[] stacks) {
        this.stacks = stacks;
        return this;
    }
}