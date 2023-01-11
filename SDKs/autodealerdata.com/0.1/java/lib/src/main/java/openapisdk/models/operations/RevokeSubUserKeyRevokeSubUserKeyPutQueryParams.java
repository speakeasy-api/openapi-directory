package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RevokeSubUserKeyRevokeSubUserKeyPutQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=apiID")
    public String apiID;
    public RevokeSubUserKeyRevokeSubUserKeyPutQueryParams withApiId(String apiID) {
        this.apiID = apiID;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=apiKey")
    public String apiKey;
    public RevokeSubUserKeyRevokeSubUserKeyPutQueryParams withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=subUserKeyUUID")
    public String subUserKeyUUID;
    public RevokeSubUserKeyRevokeSubUserKeyPutQueryParams withSubUserKeyUuid(String subUserKeyUUID) {
        this.subUserKeyUUID = subUserKeyUUID;
        return this;
    }
}