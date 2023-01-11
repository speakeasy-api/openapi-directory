package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AddApplicationCloudWatchLoggingOptionRequest {
    @JsonProperty("ApplicationName")
    public String applicationName;
    public AddApplicationCloudWatchLoggingOptionRequest withApplicationName(String applicationName) {
        this.applicationName = applicationName;
        return this;
    }
    @JsonProperty("CloudWatchLoggingOption")
    public CloudWatchLoggingOption cloudWatchLoggingOption;
    public AddApplicationCloudWatchLoggingOptionRequest withCloudWatchLoggingOption(CloudWatchLoggingOption cloudWatchLoggingOption) {
        this.cloudWatchLoggingOption = cloudWatchLoggingOption;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ConditionalToken")
    public String conditionalToken;
    public AddApplicationCloudWatchLoggingOptionRequest withConditionalToken(String conditionalToken) {
        this.conditionalToken = conditionalToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CurrentApplicationVersionId")
    public Long currentApplicationVersionId;
    public AddApplicationCloudWatchLoggingOptionRequest withCurrentApplicationVersionId(Long currentApplicationVersionId) {
        this.currentApplicationVersionId = currentApplicationVersionId;
        return this;
    }
}