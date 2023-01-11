package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ErrorResponseMessagePaymentRequired {
    @JsonProperty("errors")
    public BeezUpCommonUserErrorMessage[] errors;
    public ErrorResponseMessagePaymentRequired withErrors(BeezUpCommonUserErrorMessage[] errors) {
        this.errors = errors;
        return this;
    }
    @JsonProperty("links")
    public ErrorResponseMessagePaymentRequiredLinks links;
    public ErrorResponseMessagePaymentRequired withLinks(ErrorResponseMessagePaymentRequiredLinks links) {
        this.links = links;
        return this;
    }
}