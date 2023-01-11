package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostTextRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("activeContexts")
    public openapisdk.models.shared.ActiveContext[] activeContexts;
    public PostTextRequestBody withActiveContexts(openapisdk.models.shared.ActiveContext[] activeContexts) {
        this.activeContexts = activeContexts;
        return this;
    }
    @JsonProperty("inputText")
    public String inputText;
    public PostTextRequestBody withInputText(String inputText) {
        this.inputText = inputText;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestAttributes")
    public java.util.Map<String, String> requestAttributes;
    public PostTextRequestBody withRequestAttributes(java.util.Map<String, String> requestAttributes) {
        this.requestAttributes = requestAttributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sessionAttributes")
    public java.util.Map<String, String> sessionAttributes;
    public PostTextRequestBody withSessionAttributes(java.util.Map<String, String> sessionAttributes) {
        this.sessionAttributes = sessionAttributes;
        return this;
    }
}