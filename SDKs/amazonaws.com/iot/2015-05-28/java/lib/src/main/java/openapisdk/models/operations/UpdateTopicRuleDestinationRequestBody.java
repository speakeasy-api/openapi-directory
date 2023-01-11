package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateTopicRuleDestinationRequestBody {
    @JsonProperty("arn")
    public String arn;
    public UpdateTopicRuleDestinationRequestBody withArn(String arn) {
        this.arn = arn;
        return this;
    }
    @JsonProperty("status")
    public UpdateTopicRuleDestinationRequestBodyStatusEnum status;
    public UpdateTopicRuleDestinationRequestBody withStatus(UpdateTopicRuleDestinationRequestBodyStatusEnum status) {
        this.status = status;
        return this;
    }
}