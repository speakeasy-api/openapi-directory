package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGetSshPublicKeyQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetGetSshPublicKeyActionEnum action;
    public GetGetSshPublicKeyQueryParams withAction(GetGetSshPublicKeyActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Encoding")
    public GetGetSshPublicKeyEncodingEnum encoding;
    public GetGetSshPublicKeyQueryParams withEncoding(GetGetSshPublicKeyEncodingEnum encoding) {
        this.encoding = encoding;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=SSHPublicKeyId")
    public String sshPublicKeyId;
    public GetGetSshPublicKeyQueryParams withSshPublicKeyId(String sshPublicKeyId) {
        this.sshPublicKeyId = sshPublicKeyId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=UserName")
    public String userName;
    public GetGetSshPublicKeyQueryParams withUserName(String userName) {
        this.userName = userName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetGetSshPublicKeyVersionEnum version;
    public GetGetSshPublicKeyQueryParams withVersion(GetGetSshPublicKeyVersionEnum version) {
        this.version = version;
        return this;
    }
}