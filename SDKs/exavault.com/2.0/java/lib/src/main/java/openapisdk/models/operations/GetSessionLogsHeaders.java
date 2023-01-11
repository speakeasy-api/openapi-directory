package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSessionLogsHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=ev-access-token")
    public String evAccessToken;
    public GetSessionLogsHeaders withEvAccessToken(String evAccessToken) {
        this.evAccessToken = evAccessToken;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=ev-api-key")
    public String evApiKey;
    public GetSessionLogsHeaders withEvApiKey(String evApiKey) {
        this.evApiKey = evApiKey;
        return this;
    }
}