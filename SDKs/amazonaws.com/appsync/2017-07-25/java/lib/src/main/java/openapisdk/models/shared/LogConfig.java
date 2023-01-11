package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LogConfig
 * The CloudWatch Logs configuration.
**/
public class LogConfig {
    @JsonProperty("cloudWatchLogsRoleArn")
    public String cloudWatchLogsRoleArn;
    public LogConfig withCloudWatchLogsRoleArn(String cloudWatchLogsRoleArn) {
        this.cloudWatchLogsRoleArn = cloudWatchLogsRoleArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("excludeVerboseContent")
    public Boolean excludeVerboseContent;
    public LogConfig withExcludeVerboseContent(Boolean excludeVerboseContent) {
        this.excludeVerboseContent = excludeVerboseContent;
        return this;
    }
    @JsonProperty("fieldLogLevel")
    public FieldLogLevelEnum fieldLogLevel;
    public LogConfig withFieldLogLevel(FieldLogLevelEnum fieldLogLevel) {
        this.fieldLogLevel = fieldLogLevel;
        return this;
    }
}