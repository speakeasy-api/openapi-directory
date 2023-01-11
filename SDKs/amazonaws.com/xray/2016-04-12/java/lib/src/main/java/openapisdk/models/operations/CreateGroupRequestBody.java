package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateGroupRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FilterExpression")
    public String filterExpression;
    public CreateGroupRequestBody withFilterExpression(String filterExpression) {
        this.filterExpression = filterExpression;
        return this;
    }
    @JsonProperty("GroupName")
    public String groupName;
    public CreateGroupRequestBody withGroupName(String groupName) {
        this.groupName = groupName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InsightsConfiguration")
    public CreateGroupRequestBodyInsightsConfiguration insightsConfiguration;
    public CreateGroupRequestBody withInsightsConfiguration(CreateGroupRequestBodyInsightsConfiguration insightsConfiguration) {
        this.insightsConfiguration = insightsConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tags")
    public openapisdk.models.shared.Tag[] tags;
    public CreateGroupRequestBody withTags(openapisdk.models.shared.Tag[] tags) {
        this.tags = tags;
        return this;
    }
}