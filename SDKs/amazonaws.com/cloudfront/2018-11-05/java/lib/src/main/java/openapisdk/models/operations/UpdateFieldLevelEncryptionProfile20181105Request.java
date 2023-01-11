package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateFieldLevelEncryptionProfile20181105Request {
    public UpdateFieldLevelEncryptionProfile20181105PathParams pathParams;
    public UpdateFieldLevelEncryptionProfile20181105Request withPathParams(UpdateFieldLevelEncryptionProfile20181105PathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateFieldLevelEncryptionProfile20181105Headers headers;
    public UpdateFieldLevelEncryptionProfile20181105Request withHeaders(UpdateFieldLevelEncryptionProfile20181105Headers headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public UpdateFieldLevelEncryptionProfile20181105Request withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}