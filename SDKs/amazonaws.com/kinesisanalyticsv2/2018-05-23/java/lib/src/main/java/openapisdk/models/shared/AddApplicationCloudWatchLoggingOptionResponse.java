package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AddApplicationCloudWatchLoggingOptionResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ApplicationARN")
    public String applicationARN;
    public AddApplicationCloudWatchLoggingOptionResponse withApplicationArn(String applicationARN) {
        this.applicationARN = applicationARN;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ApplicationVersionId")
    public Long applicationVersionId;
    public AddApplicationCloudWatchLoggingOptionResponse withApplicationVersionId(Long applicationVersionId) {
        this.applicationVersionId = applicationVersionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CloudWatchLoggingOptionDescriptions")
    public CloudWatchLoggingOptionDescription[] cloudWatchLoggingOptionDescriptions;
    public AddApplicationCloudWatchLoggingOptionResponse withCloudWatchLoggingOptionDescriptions(CloudWatchLoggingOptionDescription[] cloudWatchLoggingOptionDescriptions) {
        this.cloudWatchLoggingOptionDescriptions = cloudWatchLoggingOptionDescriptions;
        return this;
    }
}