package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateFieldLevelEncryptionConfig20181105Request {
    public UpdateFieldLevelEncryptionConfig20181105PathParams pathParams;
    public UpdateFieldLevelEncryptionConfig20181105Request withPathParams(UpdateFieldLevelEncryptionConfig20181105PathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateFieldLevelEncryptionConfig20181105Headers headers;
    public UpdateFieldLevelEncryptionConfig20181105Request withHeaders(UpdateFieldLevelEncryptionConfig20181105Headers headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public UpdateFieldLevelEncryptionConfig20181105Request withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}