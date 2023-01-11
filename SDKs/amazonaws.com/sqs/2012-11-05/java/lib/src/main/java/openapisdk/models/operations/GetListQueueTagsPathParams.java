package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetListQueueTagsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=AccountNumber")
    public Long accountNumber;
    public GetListQueueTagsPathParams withAccountNumber(Long accountNumber) {
        this.accountNumber = accountNumber;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=QueueName")
    public String queueName;
    public GetListQueueTagsPathParams withQueueName(String queueName) {
        this.queueName = queueName;
        return this;
    }
}