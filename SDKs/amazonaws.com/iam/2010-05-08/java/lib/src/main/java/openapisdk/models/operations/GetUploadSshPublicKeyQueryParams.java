package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUploadSshPublicKeyQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetUploadSshPublicKeyActionEnum action;
    public GetUploadSshPublicKeyQueryParams withAction(GetUploadSshPublicKeyActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=SSHPublicKeyBody")
    public String sshPublicKeyBody;
    public GetUploadSshPublicKeyQueryParams withSshPublicKeyBody(String sshPublicKeyBody) {
        this.sshPublicKeyBody = sshPublicKeyBody;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=UserName")
    public String userName;
    public GetUploadSshPublicKeyQueryParams withUserName(String userName) {
        this.userName = userName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetUploadSshPublicKeyVersionEnum version;
    public GetUploadSshPublicKeyQueryParams withVersion(GetUploadSshPublicKeyVersionEnum version) {
        this.version = version;
        return this;
    }
}