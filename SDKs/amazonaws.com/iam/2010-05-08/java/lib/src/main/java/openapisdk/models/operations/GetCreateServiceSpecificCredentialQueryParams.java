package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCreateServiceSpecificCredentialQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetCreateServiceSpecificCredentialActionEnum action;
    public GetCreateServiceSpecificCredentialQueryParams withAction(GetCreateServiceSpecificCredentialActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ServiceName")
    public String serviceName;
    public GetCreateServiceSpecificCredentialQueryParams withServiceName(String serviceName) {
        this.serviceName = serviceName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=UserName")
    public String userName;
    public GetCreateServiceSpecificCredentialQueryParams withUserName(String userName) {
        this.userName = userName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetCreateServiceSpecificCredentialVersionEnum version;
    public GetCreateServiceSpecificCredentialQueryParams withVersion(GetCreateServiceSpecificCredentialVersionEnum version) {
        this.version = version;
        return this;
    }
}