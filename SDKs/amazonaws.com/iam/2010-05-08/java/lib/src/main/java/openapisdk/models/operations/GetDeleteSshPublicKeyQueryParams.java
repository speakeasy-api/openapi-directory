package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeleteSshPublicKeyQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDeleteSshPublicKeyActionEnum action;
    public GetDeleteSshPublicKeyQueryParams withAction(GetDeleteSshPublicKeyActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=SSHPublicKeyId")
    public String sshPublicKeyId;
    public GetDeleteSshPublicKeyQueryParams withSshPublicKeyId(String sshPublicKeyId) {
        this.sshPublicKeyId = sshPublicKeyId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=UserName")
    public String userName;
    public GetDeleteSshPublicKeyQueryParams withUserName(String userName) {
        this.userName = userName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDeleteSshPublicKeyVersionEnum version;
    public GetDeleteSshPublicKeyQueryParams withVersion(GetDeleteSshPublicKeyVersionEnum version) {
        this.version = version;
        return this;
    }
}