package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * StartSigningJobParameter
 * Information required to start a signing job.
**/
public class StartSigningJobParameter {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destination")
    public Destination destination;
    public StartSigningJobParameter withDestination(Destination destination) {
        this.destination = destination;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("signingProfileName")
    public String signingProfileName;
    public StartSigningJobParameter withSigningProfileName(String signingProfileName) {
        this.signingProfileName = signingProfileName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("signingProfileParameter")
    public SigningProfileParameter signingProfileParameter;
    public StartSigningJobParameter withSigningProfileParameter(SigningProfileParameter signingProfileParameter) {
        this.signingProfileParameter = signingProfileParameter;
        return this;
    }
}