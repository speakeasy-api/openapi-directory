package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * NonTalkTimeFilter
 * An object that enables you to configure your category to be applied to call analytics jobs where either the customer or agent was interrupted.
**/
public class NonTalkTimeFilter {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AbsoluteTimeRange")
    public AbsoluteTimeRange absoluteTimeRange;
    public NonTalkTimeFilter withAbsoluteTimeRange(AbsoluteTimeRange absoluteTimeRange) {
        this.absoluteTimeRange = absoluteTimeRange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Negate")
    public Boolean negate;
    public NonTalkTimeFilter withNegate(Boolean negate) {
        this.negate = negate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RelativeTimeRange")
    public RelativeTimeRange relativeTimeRange;
    public NonTalkTimeFilter withRelativeTimeRange(RelativeTimeRange relativeTimeRange) {
        this.relativeTimeRange = relativeTimeRange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Threshold")
    public Long threshold;
    public NonTalkTimeFilter withThreshold(Long threshold) {
        this.threshold = threshold;
        return this;
    }
}