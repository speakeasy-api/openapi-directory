package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateFieldLevelEncryptionConfig20190326Request {
    public UpdateFieldLevelEncryptionConfig20190326PathParams pathParams;
    public UpdateFieldLevelEncryptionConfig20190326Request withPathParams(UpdateFieldLevelEncryptionConfig20190326PathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateFieldLevelEncryptionConfig20190326Headers headers;
    public UpdateFieldLevelEncryptionConfig20190326Request withHeaders(UpdateFieldLevelEncryptionConfig20190326Headers headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public UpdateFieldLevelEncryptionConfig20190326Request withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}