package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TimestampValue
 * Contains information about a timestamp.
**/
public class TimestampValue {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeInMillis")
    public Long timeInMillis;
    public TimestampValue withTimeInMillis(Long timeInMillis) {
        this.timeInMillis = timeInMillis;
        return this;
    }
}