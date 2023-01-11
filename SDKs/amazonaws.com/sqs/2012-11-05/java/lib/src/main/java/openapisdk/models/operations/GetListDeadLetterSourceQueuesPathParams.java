package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetListDeadLetterSourceQueuesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=AccountNumber")
    public Long accountNumber;
    public GetListDeadLetterSourceQueuesPathParams withAccountNumber(Long accountNumber) {
        this.accountNumber = accountNumber;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=QueueName")
    public String queueName;
    public GetListDeadLetterSourceQueuesPathParams withQueueName(String queueName) {
        this.queueName = queueName;
        return this;
    }
}