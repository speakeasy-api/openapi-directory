package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DescribeConditionalForwardersResult
 * The result of a DescribeConditionalForwarder request.
**/
public class DescribeConditionalForwardersResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ConditionalForwarders")
    public ConditionalForwarder[] conditionalForwarders;
    public DescribeConditionalForwardersResult withConditionalForwarders(ConditionalForwarder[] conditionalForwarders) {
        this.conditionalForwarders = conditionalForwarders;
        return this;
    }
}