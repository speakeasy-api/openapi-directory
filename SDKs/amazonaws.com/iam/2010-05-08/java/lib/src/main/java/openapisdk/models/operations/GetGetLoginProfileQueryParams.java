package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGetLoginProfileQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetGetLoginProfileActionEnum action;
    public GetGetLoginProfileQueryParams withAction(GetGetLoginProfileActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=UserName")
    public String userName;
    public GetGetLoginProfileQueryParams withUserName(String userName) {
        this.userName = userName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetGetLoginProfileVersionEnum version;
    public GetGetLoginProfileQueryParams withVersion(GetGetLoginProfileVersionEnum version) {
        this.version = version;
        return this;
    }
}