package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostTruststorePkcs12Request {
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public PostTruststorePkcs12RequestBody request;
    public PostTruststorePkcs12Request withRequest(PostTruststorePkcs12RequestBody request) {
        this.request = request;
        return this;
    }
}