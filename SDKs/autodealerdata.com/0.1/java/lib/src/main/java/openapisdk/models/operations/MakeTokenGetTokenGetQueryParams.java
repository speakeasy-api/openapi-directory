package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MakeTokenGetTokenGetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=apiID")
    public String apiID;
    public MakeTokenGetTokenGetQueryParams withApiId(String apiID) {
        this.apiID = apiID;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=apiKey")
    public String apiKey;
    public MakeTokenGetTokenGetQueryParams withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
}