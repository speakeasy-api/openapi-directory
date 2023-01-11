package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRejectDataShareQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetRejectDataShareActionEnum action;
    public GetRejectDataShareQueryParams withAction(GetRejectDataShareActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DataShareArn")
    public String dataShareArn;
    public GetRejectDataShareQueryParams withDataShareArn(String dataShareArn) {
        this.dataShareArn = dataShareArn;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetRejectDataShareVersionEnum version;
    public GetRejectDataShareQueryParams withVersion(GetRejectDataShareVersionEnum version) {
        this.version = version;
        return this;
    }
}