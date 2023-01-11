package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTagQueuePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=AccountNumber")
    public Long accountNumber;
    public GetTagQueuePathParams withAccountNumber(Long accountNumber) {
        this.accountNumber = accountNumber;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=QueueName")
    public String queueName;
    public GetTagQueuePathParams withQueueName(String queueName) {
        this.queueName = queueName;
        return this;
    }
}