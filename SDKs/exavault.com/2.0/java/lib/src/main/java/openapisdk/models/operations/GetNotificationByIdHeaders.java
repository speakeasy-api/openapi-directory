package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetNotificationByIdHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=ev-access-token")
    public String evAccessToken;
    public GetNotificationByIdHeaders withEvAccessToken(String evAccessToken) {
        this.evAccessToken = evAccessToken;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=ev-api-key")
    public String evApiKey;
    public GetNotificationByIdHeaders withEvApiKey(String evApiKey) {
        this.evApiKey = evApiKey;
        return this;
    }
}