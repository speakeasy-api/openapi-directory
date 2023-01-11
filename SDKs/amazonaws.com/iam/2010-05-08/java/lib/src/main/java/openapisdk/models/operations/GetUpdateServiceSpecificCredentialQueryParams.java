package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUpdateServiceSpecificCredentialQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetUpdateServiceSpecificCredentialActionEnum action;
    public GetUpdateServiceSpecificCredentialQueryParams withAction(GetUpdateServiceSpecificCredentialActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ServiceSpecificCredentialId")
    public String serviceSpecificCredentialId;
    public GetUpdateServiceSpecificCredentialQueryParams withServiceSpecificCredentialId(String serviceSpecificCredentialId) {
        this.serviceSpecificCredentialId = serviceSpecificCredentialId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Status")
    public GetUpdateServiceSpecificCredentialStatusEnum status;
    public GetUpdateServiceSpecificCredentialQueryParams withStatus(GetUpdateServiceSpecificCredentialStatusEnum status) {
        this.status = status;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=UserName")
    public String userName;
    public GetUpdateServiceSpecificCredentialQueryParams withUserName(String userName) {
        this.userName = userName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetUpdateServiceSpecificCredentialVersionEnum version;
    public GetUpdateServiceSpecificCredentialQueryParams withVersion(GetUpdateServiceSpecificCredentialVersionEnum version) {
        this.version = version;
        return this;
    }
}