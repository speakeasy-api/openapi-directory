package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeauthorizeDataShareQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDeauthorizeDataShareActionEnum action;
    public GetDeauthorizeDataShareQueryParams withAction(GetDeauthorizeDataShareActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ConsumerIdentifier")
    public String consumerIdentifier;
    public GetDeauthorizeDataShareQueryParams withConsumerIdentifier(String consumerIdentifier) {
        this.consumerIdentifier = consumerIdentifier;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DataShareArn")
    public String dataShareArn;
    public GetDeauthorizeDataShareQueryParams withDataShareArn(String dataShareArn) {
        this.dataShareArn = dataShareArn;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDeauthorizeDataShareVersionEnum version;
    public GetDeauthorizeDataShareQueryParams withVersion(GetDeauthorizeDataShareVersionEnum version) {
        this.version = version;
        return this;
    }
}