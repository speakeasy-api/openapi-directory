package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BeezUpCommonUserErrorMessage {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("arguments")
    public BeezUpCommonUserErrorMessageArguments[] arguments;
    public BeezUpCommonUserErrorMessage withArguments(BeezUpCommonUserErrorMessageArguments[] arguments) {
        this.arguments = arguments;
        return this;
    }
    @JsonProperty("code")
    public String code;
    public BeezUpCommonUserErrorMessage withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cultureName")
    public String cultureName;
    public BeezUpCommonUserErrorMessage withCultureName(String cultureName) {
        this.cultureName = cultureName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("docUrl")
    public String docUrl;
    public BeezUpCommonUserErrorMessage withDocUrl(String docUrl) {
        this.docUrl = docUrl;
        return this;
    }
    @JsonProperty("message")
    public String message;
    public BeezUpCommonUserErrorMessage withMessage(String message) {
        this.message = message;
        return this;
    }
}