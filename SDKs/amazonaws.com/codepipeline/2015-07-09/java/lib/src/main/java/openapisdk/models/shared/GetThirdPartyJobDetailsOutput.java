package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetThirdPartyJobDetailsOutput
 * Represents the output of a <code>GetThirdPartyJobDetails</code> action.
**/
public class GetThirdPartyJobDetailsOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jobDetails")
    public ThirdPartyJobDetails jobDetails;
    public GetThirdPartyJobDetailsOutput withJobDetails(ThirdPartyJobDetails jobDetails) {
        this.jobDetails = jobDetails;
        return this;
    }
}