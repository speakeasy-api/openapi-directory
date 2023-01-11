package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UploadFileHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=ev-access-token")
    public String evAccessToken;
    public UploadFileHeaders withEvAccessToken(String evAccessToken) {
        this.evAccessToken = evAccessToken;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=ev-api-key")
    public String evApiKey;
    public UploadFileHeaders withEvApiKey(String evApiKey) {
        this.evApiKey = evApiKey;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=offsetBytes")
    public Long offsetBytes;
    public UploadFileHeaders withOffsetBytes(Long offsetBytes) {
        this.offsetBytes = offsetBytes;
        return this;
    }
}