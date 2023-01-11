package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPreviewImageHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=ev-access-token")
    public String evAccessToken;
    public GetPreviewImageHeaders withEvAccessToken(String evAccessToken) {
        this.evAccessToken = evAccessToken;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=ev-api-key")
    public String evApiKey;
    public GetPreviewImageHeaders withEvApiKey(String evApiKey) {
        this.evApiKey = evApiKey;
        return this;
    }
}