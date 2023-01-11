package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetProgrammaticAccessCredentialsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("credentials")
    public Credentials credentials;
    public GetProgrammaticAccessCredentialsResponse withCredentials(Credentials credentials) {
        this.credentials = credentials;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("durationInMinutes")
    public Long durationInMinutes;
    public GetProgrammaticAccessCredentialsResponse withDurationInMinutes(Long durationInMinutes) {
        this.durationInMinutes = durationInMinutes;
        return this;
    }
}