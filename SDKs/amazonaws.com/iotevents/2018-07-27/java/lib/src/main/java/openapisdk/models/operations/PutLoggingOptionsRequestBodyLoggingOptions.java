package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PutLoggingOptionsRequestBodyLoggingOptions
 * The values of the AWS IoT Events logging options.
**/
public class PutLoggingOptionsRequestBodyLoggingOptions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("detectorDebugOptions")
    public openapisdk.models.shared.DetectorDebugOption[] detectorDebugOptions;
    public PutLoggingOptionsRequestBodyLoggingOptions withDetectorDebugOptions(openapisdk.models.shared.DetectorDebugOption[] detectorDebugOptions) {
        this.detectorDebugOptions = detectorDebugOptions;
        return this;
    }
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