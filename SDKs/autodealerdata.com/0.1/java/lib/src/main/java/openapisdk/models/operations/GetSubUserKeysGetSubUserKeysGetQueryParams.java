package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSubUserKeysGetSubUserKeysGetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=apiID")
    public String apiID;
    public GetSubUserKeysGetSubUserKeysGetQueryParams withApiId(String apiID) {
        this.apiID = apiID;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=apiKey")
    public String apiKey;
    public GetSubUserKeysGetSubUserKeysGetQueryParams withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
}