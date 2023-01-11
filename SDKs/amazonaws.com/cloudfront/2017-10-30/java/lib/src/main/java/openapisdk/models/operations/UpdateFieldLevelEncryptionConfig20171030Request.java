package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateFieldLevelEncryptionConfig20171030Request {
    public UpdateFieldLevelEncryptionConfig20171030PathParams pathParams;
    public UpdateFieldLevelEncryptionConfig20171030Request withPathParams(UpdateFieldLevelEncryptionConfig20171030PathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateFieldLevelEncryptionConfig20171030Headers headers;
    public UpdateFieldLevelEncryptionConfig20171030Request withHeaders(UpdateFieldLevelEncryptionConfig20171030Headers headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public UpdateFieldLevelEncryptionConfig20171030Request withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}