package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * StandardsSubscriptionRequest
 * The standard that you want to enable.
**/
public class StandardsSubscriptionRequest {
    @JsonProperty("StandardsArn")
    public String standardsArn;
    public StandardsSubscriptionRequest withStandardsArn(String standardsArn) {
        this.standardsArn = standardsArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StandardsInput")
    public java.util.Map<String, String> standardsInput;
    public StandardsSubscriptionRequest withStandardsInput(java.util.Map<String, String> standardsInput) {
        this.standardsInput = standardsInput;
        return this;
    }
}