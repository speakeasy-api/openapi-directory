package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeAgentVersionsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ConfigurationManager")
    public StackConfigurationManager configurationManager;
    public DescribeAgentVersionsRequest withConfigurationManager(StackConfigurationManager configurationManager) {
        this.configurationManager = configurationManager;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StackId")
    public String stackId;
    public DescribeAgentVersionsRequest withStackId(String stackId) {
        this.stackId = stackId;
        return this;
    }
}