package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListSignalingChannelsRequestBodyChannelNameCondition
 * An optional input parameter for the <code>ListSignalingChannels</code> API. When this parameter is specified while invoking <code>ListSignalingChannels</code>, the API returns only the channels that satisfy a condition specified in <code>ChannelNameCondition</code>.
**/
public class ListSignalingChannelsRequestBodyChannelNameCondition {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ComparisonOperator")
    public openapisdk.models.shared.ComparisonOperatorEnum comparisonOperator;
    public ListSignalingChannelsRequestBodyChannelNameCondition withComparisonOperator(openapisdk.models.shared.ComparisonOperatorEnum comparisonOperator) {
        this.comparisonOperator = comparisonOperator;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ComparisonValue")
    public String comparisonValue;
    public ListSignalingChannelsRequestBodyChannelNameCondition withComparisonValue(String comparisonValue) {
        this.comparisonValue = comparisonValue;
        return this;
    }
}