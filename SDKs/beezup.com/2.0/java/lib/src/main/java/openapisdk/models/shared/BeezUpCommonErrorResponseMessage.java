package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class BeezUpCommonErrorResponseMessage {
    @JsonProperty("errors")
    public BeezUpCommonUserErrorMessage[] errors;
    public BeezUpCommonErrorResponseMessage withErrors(BeezUpCommonUserErrorMessage[] errors) {
        this.errors = errors;
        return this;
    }
}