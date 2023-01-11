package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DeltaTime
 * Used to limit data to that which has arrived since the last execution of the action.
**/
public class DeltaTime {
    @JsonProperty("offsetSeconds")
    public Long offsetSeconds;
    public DeltaTime withOffsetSeconds(Long offsetSeconds) {
        this.offsetSeconds = offsetSeconds;
        return this;
    }
    @JsonProperty("timeExpression")
    public String timeExpression;
    public DeltaTime withTimeExpression(String timeExpression) {
        this.timeExpression = timeExpression;
        return this;
    }
}