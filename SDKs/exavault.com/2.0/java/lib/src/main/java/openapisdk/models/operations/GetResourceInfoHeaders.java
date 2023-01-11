package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetResourceInfoHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=ev-access-token")
    public String evAccessToken;
    public GetResourceInfoHeaders withEvAccessToken(String evAccessToken) {
        this.evAccessToken = evAccessToken;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=ev-api-key")
    public String evApiKey;
    public GetResourceInfoHeaders withEvApiKey(String evApiKey) {
        this.evApiKey = evApiKey;
        return this;
    }
}