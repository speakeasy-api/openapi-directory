package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateFieldLevelEncryptionProfile20190326Request {
    public UpdateFieldLevelEncryptionProfile20190326PathParams pathParams;
    public UpdateFieldLevelEncryptionProfile20190326Request withPathParams(UpdateFieldLevelEncryptionProfile20190326PathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateFieldLevelEncryptionProfile20190326Headers headers;
    public UpdateFieldLevelEncryptionProfile20190326Request withHeaders(UpdateFieldLevelEncryptionProfile20190326Headers headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public UpdateFieldLevelEncryptionProfile20190326Request withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}