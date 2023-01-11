package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ConsumerRequestCountsAllPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=consumer_id")
    public String consumerId;
    public ConsumerRequestCountsAllPathParams withConsumerId(String consumerId) {
        this.consumerId = consumerId;
        return this;
    }
}