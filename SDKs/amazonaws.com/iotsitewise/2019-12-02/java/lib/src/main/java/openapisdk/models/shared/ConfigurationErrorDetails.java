package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ConfigurationErrorDetails
 * Contains the details of an IoT SiteWise configuration error.
**/
public class ConfigurationErrorDetails {
    @JsonProperty("code")
    public ErrorCodeEnum code;
    public ConfigurationErrorDetails withCode(ErrorCodeEnum code) {
        this.code = code;
        return this;
    }
    @JsonProperty("message")
    public String message;
    public ConfigurationErrorDetails withMessage(String message) {
        this.message = message;
        return this;
    }
}