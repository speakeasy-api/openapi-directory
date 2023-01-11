package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Group
 * Details and metadata for a group.
**/
public class Group {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FilterExpression")
    public String filterExpression;
    public Group withFilterExpression(String filterExpression) {
        this.filterExpression = filterExpression;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GroupARN")
    public String groupARN;
    public Group withGroupArn(String groupARN) {
        this.groupARN = groupARN;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GroupName")
    public String groupName;
    public Group withGroupName(String groupName) {
        this.groupName = groupName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InsightsConfiguration")
    public InsightsConfiguration insightsConfiguration;
    public Group withInsightsConfiguration(InsightsConfiguration insightsConfiguration) {
        this.insightsConfiguration = insightsConfiguration;
        return this;
    }
}