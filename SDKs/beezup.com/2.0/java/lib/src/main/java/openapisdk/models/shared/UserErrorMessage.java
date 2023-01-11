package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UserErrorMessage {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("arguments")
    public java.util.Map<String, java.util.Map<String, Object>> arguments;
    public UserErrorMessage withArguments(java.util.Map<String, java.util.Map<String, Object>> arguments) {
        this.arguments = arguments;
        return this;
    }
    @JsonProperty("code")
    public String code;
    public UserErrorMessage withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cultureName")
    public String cultureName;
    public UserErrorMessage withCultureName(String cultureName) {
        this.cultureName = cultureName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("docUrl")
    public String docUrl;
    public UserErrorMessage withDocUrl(String docUrl) {
        this.docUrl = docUrl;
        return this;
    }
    @JsonProperty("message")
    public String message;
    public UserErrorMessage withMessage(String message) {
        this.message = message;
        return this;
    }
}