package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PublishFindingToSnsParams
 * Parameters to define a mitigation action that publishes findings to Amazon SNS. You can implement your own custom actions in response to the Amazon SNS messages.
**/
public class PublishFindingToSnsParams {
    @JsonProperty("topicArn")
    public String topicArn;
    public PublishFindingToSnsParams withTopicArn(String topicArn) {
        this.topicArn = topicArn;
        return this;
    }
}