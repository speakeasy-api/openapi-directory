package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteApplicationCloudWatchLoggingOptionRequest {
    @JsonProperty("ApplicationName")
    public String applicationName;
    public DeleteApplicationCloudWatchLoggingOptionRequest withApplicationName(String applicationName) {
        this.applicationName = applicationName;
        return this;
    }
    @JsonProperty("CloudWatchLoggingOptionId")
    public String cloudWatchLoggingOptionId;
    public DeleteApplicationCloudWatchLoggingOptionRequest withCloudWatchLoggingOptionId(String cloudWatchLoggingOptionId) {
        this.cloudWatchLoggingOptionId = cloudWatchLoggingOptionId;
        return this;
    }
    @JsonProperty("CurrentApplicationVersionId")
    public Long currentApplicationVersionId;
    public DeleteApplicationCloudWatchLoggingOptionRequest withCurrentApplicationVersionId(Long currentApplicationVersionId) {
        this.currentApplicationVersionId = currentApplicationVersionId;
        return this;
    }
}