package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutEmailIdentityFeedbackAttributesRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EmailForwardingEnabled")
    public Boolean emailForwardingEnabled;
    public PutEmailIdentityFeedbackAttributesRequestBody withEmailForwardingEnabled(Boolean emailForwardingEnabled) {
        this.emailForwardingEnabled = emailForwardingEnabled;
        return this;
    }
}