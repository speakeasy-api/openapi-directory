package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PutLoggingOptionsRequestBodyLoggingOptions
 * Information about logging options.
**/
public class PutLoggingOptionsRequestBodyLoggingOptions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enabled")
    public Boolean enabled;
    public PutLoggingOptionsRequestBodyLoggingOptions withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("level")
    public openapisdk.models.shared.LoggingLevelEnum level;
    public PutLoggingOptionsRequestBodyLoggingOptions withLevel(openapisdk.models.shared.LoggingLevelEnum level) {
        this.level = level;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("roleArn")
    public String roleArn;
    public PutLoggingOptionsRequestBodyLoggingOptions withRoleArn(String roleArn) {
        this.roleArn = roleArn;
        return this;
    }
}