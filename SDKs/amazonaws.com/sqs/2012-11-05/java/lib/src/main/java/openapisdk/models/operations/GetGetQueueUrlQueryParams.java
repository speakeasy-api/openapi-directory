package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGetQueueUrlQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetGetQueueUrlActionEnum action;
    public GetGetQueueUrlQueryParams withAction(GetGetQueueUrlActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=QueueName")
    public String queueName;
    public GetGetQueueUrlQueryParams withQueueName(String queueName) {
        this.queueName = queueName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=QueueOwnerAWSAccountId")
    public String queueOwnerAWSAccountId;
    public GetGetQueueUrlQueryParams withQueueOwnerAwsAccountId(String queueOwnerAWSAccountId) {
        this.queueOwnerAWSAccountId = queueOwnerAWSAccountId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetGetQueueUrlVersionEnum version;
    public GetGetQueueUrlQueryParams withVersion(GetGetQueueUrlVersionEnum version) {
        this.version = version;
        return this;
    }
}