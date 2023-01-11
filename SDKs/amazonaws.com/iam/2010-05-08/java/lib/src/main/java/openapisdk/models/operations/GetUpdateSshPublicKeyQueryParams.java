package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUpdateSshPublicKeyQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetUpdateSshPublicKeyActionEnum action;
    public GetUpdateSshPublicKeyQueryParams withAction(GetUpdateSshPublicKeyActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=SSHPublicKeyId")
    public String sshPublicKeyId;
    public GetUpdateSshPublicKeyQueryParams withSshPublicKeyId(String sshPublicKeyId) {
        this.sshPublicKeyId = sshPublicKeyId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Status")
    public GetUpdateSshPublicKeyStatusEnum status;
    public GetUpdateSshPublicKeyQueryParams withStatus(GetUpdateSshPublicKeyStatusEnum status) {
        this.status = status;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=UserName")
    public String userName;
    public GetUpdateSshPublicKeyQueryParams withUserName(String userName) {
        this.userName = userName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetUpdateSshPublicKeyVersionEnum version;
    public GetUpdateSshPublicKeyQueryParams withVersion(GetUpdateSshPublicKeyVersionEnum version) {
        this.version = version;
        return this;
    }
}