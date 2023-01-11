package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * StartSessionResult
 * Contains the details of the started session.
**/
public class StartSessionResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SessionToken")
    public String sessionToken;
    public StartSessionResult withSessionToken(String sessionToken) {
        this.sessionToken = sessionToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TimingInformation")
    public TimingInformation timingInformation;
    public StartSessionResult withTimingInformation(TimingInformation timingInformation) {
        this.timingInformation = timingInformation;
        return this;
    }
}