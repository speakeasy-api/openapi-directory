package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeHubResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AutoEnableControls")
    public Boolean autoEnableControls;
    public DescribeHubResponse withAutoEnableControls(Boolean autoEnableControls) {
        this.autoEnableControls = autoEnableControls;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("HubArn")
    public String hubArn;
    public DescribeHubResponse withHubArn(String hubArn) {
        this.hubArn = hubArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SubscribedAt")
    public String subscribedAt;
    public DescribeHubResponse withSubscribedAt(String subscribedAt) {
        this.subscribedAt = subscribedAt;
        return this;
    }
}