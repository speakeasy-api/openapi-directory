package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTopicRuleDestinationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=arn")
    public String arn;
    public GetTopicRuleDestinationPathParams withArn(String arn) {
        this.arn = arn;
        return this;
    }
}