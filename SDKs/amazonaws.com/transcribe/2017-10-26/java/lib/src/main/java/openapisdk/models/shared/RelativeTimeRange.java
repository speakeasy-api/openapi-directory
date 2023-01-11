package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RelativeTimeRange
 * An object that allows percentages to specify the proportion of the call where you would like to apply a filter. For example, you can specify the first half of the call. You can also specify the period of time between halfway through to three-quarters of the way through the call. Because the length of conversation can vary between calls, you can apply relative time ranges across all calls. 
**/
public class RelativeTimeRange {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EndPercentage")
    public Long endPercentage;
    public RelativeTimeRange withEndPercentage(Long endPercentage) {
        this.endPercentage = endPercentage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("First")
    public Long first;
    public RelativeTimeRange withFirst(Long first) {
        this.first = first;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Last")
    public Long last;
    public RelativeTimeRange withLast(Long last) {
        this.last = last;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StartPercentage")
    public Long startPercentage;
    public RelativeTimeRange withStartPercentage(Long startPercentage) {
        this.startPercentage = startPercentage;
        return this;
    }
}