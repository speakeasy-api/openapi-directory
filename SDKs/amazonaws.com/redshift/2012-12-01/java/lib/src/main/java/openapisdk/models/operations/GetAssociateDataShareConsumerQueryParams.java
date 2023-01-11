package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAssociateDataShareConsumerQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetAssociateDataShareConsumerActionEnum action;
    public GetAssociateDataShareConsumerQueryParams withAction(GetAssociateDataShareConsumerActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=AssociateEntireAccount")
    public Boolean associateEntireAccount;
    public GetAssociateDataShareConsumerQueryParams withAssociateEntireAccount(Boolean associateEntireAccount) {
        this.associateEntireAccount = associateEntireAccount;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ConsumerArn")
    public String consumerArn;
    public GetAssociateDataShareConsumerQueryParams withConsumerArn(String consumerArn) {
        this.consumerArn = consumerArn;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DataShareArn")
    public String dataShareArn;
    public GetAssociateDataShareConsumerQueryParams withDataShareArn(String dataShareArn) {
        this.dataShareArn = dataShareArn;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetAssociateDataShareConsumerVersionEnum version;
    public GetAssociateDataShareConsumerQueryParams withVersion(GetAssociateDataShareConsumerVersionEnum version) {
        this.version = version;
        return this;
    }
}