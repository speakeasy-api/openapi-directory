package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * WaitTime
 * Specifies a duration or a date and time that indicates when Amazon Pinpoint determines whether an activity's conditions have been met or an activity moves participants to the next activity in a journey.
**/
public class WaitTime {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("WaitFor")
    public String waitFor;
    public WaitTime withWaitFor(String waitFor) {
        this.waitFor = waitFor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("WaitUntil")
    public String waitUntil;
    public WaitTime withWaitUntil(String waitUntil) {
        this.waitUntil = waitUntil;
        return this;
    }
}