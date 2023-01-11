package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeleteQueuePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=AccountNumber")
    public Long accountNumber;
    public GetDeleteQueuePathParams withAccountNumber(Long accountNumber) {
        this.accountNumber = accountNumber;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=QueueName")
    public String queueName;
    public GetDeleteQueuePathParams withQueueName(String queueName) {
        this.queueName = queueName;
        return this;
    }
}