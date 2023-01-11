package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EndSessionResult
 * Contains the details of the ended session.
**/
public class EndSessionResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TimingInformation")
    public TimingInformation timingInformation;
    public EndSessionResult withTimingInformation(TimingInformation timingInformation) {
        this.timingInformation = timingInformation;
        return this;
    }
}