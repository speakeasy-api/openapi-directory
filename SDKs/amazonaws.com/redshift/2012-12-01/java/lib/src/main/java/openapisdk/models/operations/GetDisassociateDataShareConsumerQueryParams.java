package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDisassociateDataShareConsumerQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDisassociateDataShareConsumerActionEnum action;
    public GetDisassociateDataShareConsumerQueryParams withAction(GetDisassociateDataShareConsumerActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ConsumerArn")
    public String consumerArn;
    public GetDisassociateDataShareConsumerQueryParams withConsumerArn(String consumerArn) {
        this.consumerArn = consumerArn;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DataShareArn")
    public String dataShareArn;
    public GetDisassociateDataShareConsumerQueryParams withDataShareArn(String dataShareArn) {
        this.dataShareArn = dataShareArn;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DisassociateEntireAccount")
    public Boolean disassociateEntireAccount;
    public GetDisassociateDataShareConsumerQueryParams withDisassociateEntireAccount(Boolean disassociateEntireAccount) {
        this.disassociateEntireAccount = disassociateEntireAccount;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDisassociateDataShareConsumerVersionEnum version;
    public GetDisassociateDataShareConsumerQueryParams withVersion(GetDisassociateDataShareConsumerVersionEnum version) {
        this.version = version;
        return this;
    }
}