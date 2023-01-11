package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MakeTokenGetTokenPostQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=apiID")
    public String apiID;
    public MakeTokenGetTokenPostQueryParams withApiId(String apiID) {
        this.apiID = apiID;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=apiKey")
    public String apiKey;
    public MakeTokenGetTokenPostQueryParams withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
}