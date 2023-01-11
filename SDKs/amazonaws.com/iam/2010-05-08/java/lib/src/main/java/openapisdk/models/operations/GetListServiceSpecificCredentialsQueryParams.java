package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetListServiceSpecificCredentialsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetListServiceSpecificCredentialsActionEnum action;
    public GetListServiceSpecificCredentialsQueryParams withAction(GetListServiceSpecificCredentialsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ServiceName")
    public String serviceName;
    public GetListServiceSpecificCredentialsQueryParams withServiceName(String serviceName) {
        this.serviceName = serviceName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=UserName")
    public String userName;
    public GetListServiceSpecificCredentialsQueryParams withUserName(String userName) {
        this.userName = userName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetListServiceSpecificCredentialsVersionEnum version;
    public GetListServiceSpecificCredentialsQueryParams withVersion(GetListServiceSpecificCredentialsVersionEnum version) {
        this.version = version;
        return this;
    }
}