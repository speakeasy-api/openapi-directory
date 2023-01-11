package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AssociateTrackerConsumerRequestBody {
    @JsonProperty("ConsumerArn")
    public String consumerArn;
    public AssociateTrackerConsumerRequestBody withConsumerArn(String consumerArn) {
        this.consumerArn = consumerArn;
        return this;
    }
}