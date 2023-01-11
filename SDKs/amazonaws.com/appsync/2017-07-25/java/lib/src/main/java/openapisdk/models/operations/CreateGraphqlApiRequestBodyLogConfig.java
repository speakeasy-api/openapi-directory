package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateGraphqlApiRequestBodyLogConfig
 * The CloudWatch Logs configuration.
**/
public class CreateGraphqlApiRequestBodyLogConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cloudWatchLogsRoleArn")
    public String cloudWatchLogsRoleArn;
    public CreateGraphqlApiRequestBodyLogConfig withCloudWatchLogsRoleArn(String cloudWatchLogsRoleArn) {
        this.cloudWatchLogsRoleArn = cloudWatchLogsRoleArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("excludeVerboseContent")
    public Boolean excludeVerboseContent;
    public CreateGraphqlApiRequestBodyLogConfig withExcludeVerboseContent(Boolean excludeVerboseContent) {
        this.excludeVerboseContent = excludeVerboseContent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fieldLogLevel")
    public openapisdk.models.shared.FieldLogLevelEnum fieldLogLevel;
    public CreateGraphqlApiRequestBodyLogConfig withFieldLogLevel(openapisdk.models.shared.FieldLogLevelEnum fieldLogLevel) {
        this.fieldLogLevel = fieldLogLevel;
        return this;
    }
}