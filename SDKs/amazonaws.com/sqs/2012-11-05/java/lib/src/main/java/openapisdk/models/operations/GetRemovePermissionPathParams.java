package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRemovePermissionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=AccountNumber")
    public Long accountNumber;
    public GetRemovePermissionPathParams withAccountNumber(Long accountNumber) {
        this.accountNumber = accountNumber;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=QueueName")
    public String queueName;
    public GetRemovePermissionPathParams withQueueName(String queueName) {
        this.queueName = queueName;
        return this;
    }
}