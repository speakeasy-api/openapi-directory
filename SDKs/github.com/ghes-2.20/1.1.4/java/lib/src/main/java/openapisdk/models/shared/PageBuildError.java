package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PageBuildError {
    @JsonProperty("message")
    public String message;
    public PageBuildError withMessage(String message) {
        this.message = message;
        return this;
    }
}