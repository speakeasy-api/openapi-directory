package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateGroupRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FilterExpression")
    public String filterExpression;
    public UpdateGroupRequestBody withFilterExpression(String filterExpression) {
        this.filterExpression = filterExpression;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GroupARN")
    public String groupARN;
    public UpdateGroupRequestBody withGroupArn(String groupARN) {
        this.groupARN = groupARN;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GroupName")
    public String groupName;
    public UpdateGroupRequestBody withGroupName(String groupName) {
        this.groupName = groupName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InsightsConfiguration")
    public UpdateGroupRequestBodyInsightsConfiguration insightsConfiguration;
    public UpdateGroupRequestBody withInsightsConfiguration(UpdateGroupRequestBodyInsightsConfiguration insightsConfiguration) {
        this.insightsConfiguration = insightsConfiguration;
        return this;
    }
}