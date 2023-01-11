package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteTopicRuleDestinationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=arn")
    public String arn;
    public DeleteTopicRuleDestinationPathParams withArn(String arn) {
        this.arn = arn;
        return this;
    }
}