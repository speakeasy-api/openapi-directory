package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ConsumersOnePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=consumer_id")
    public String consumerId;
    public ConsumersOnePathParams withConsumerId(String consumerId) {
        this.consumerId = consumerId;
        return this;
    }
}