package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateGraphqlApiRequestBodyLogConfig
 * The CloudWatch Logs configuration.
**/
public class UpdateGraphqlApiRequestBodyLogConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cloudWatchLogsRoleArn")
    public String cloudWatchLogsRoleArn;
    public UpdateGraphqlApiRequestBodyLogConfig withCloudWatchLogsRoleArn(String cloudWatchLogsRoleArn) {
        this.cloudWatchLogsRoleArn = cloudWatchLogsRoleArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("excludeVerboseContent")
    public Boolean excludeVerboseContent;
    public UpdateGraphqlApiRequestBodyLogConfig withExcludeVerboseContent(Boolean excludeVerboseContent) {
        this.excludeVerboseContent = excludeVerboseContent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fieldLogLevel")
    public openapisdk.models.shared.FieldLogLevelEnum fieldLogLevel;
    public UpdateGraphqlApiRequestBodyLogConfig withFieldLogLevel(openapisdk.models.shared.FieldLogLevelEnum fieldLogLevel) {
        this.fieldLogLevel = fieldLogLevel;
        return this;
    }
}