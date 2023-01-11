package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAuthorizeDataShareQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetAuthorizeDataShareActionEnum action;
    public GetAuthorizeDataShareQueryParams withAction(GetAuthorizeDataShareActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ConsumerIdentifier")
    public String consumerIdentifier;
    public GetAuthorizeDataShareQueryParams withConsumerIdentifier(String consumerIdentifier) {
        this.consumerIdentifier = consumerIdentifier;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DataShareArn")
    public String dataShareArn;
    public GetAuthorizeDataShareQueryParams withDataShareArn(String dataShareArn) {
        this.dataShareArn = dataShareArn;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetAuthorizeDataShareVersionEnum version;
    public GetAuthorizeDataShareQueryParams withVersion(GetAuthorizeDataShareVersionEnum version) {
        this.version = version;
        return this;
    }
}