package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteNotificationByIdHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=ev-access-token")
    public String evAccessToken;
    public DeleteNotificationByIdHeaders withEvAccessToken(String evAccessToken) {
        this.evAccessToken = evAccessToken;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=ev-api-key")
    public String evApiKey;
    public DeleteNotificationByIdHeaders withEvApiKey(String evApiKey) {
        this.evApiKey = evApiKey;
        return this;
    }
}