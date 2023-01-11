package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateFieldLevelEncryptionProfile20171030Request {
    public UpdateFieldLevelEncryptionProfile20171030PathParams pathParams;
    public UpdateFieldLevelEncryptionProfile20171030Request withPathParams(UpdateFieldLevelEncryptionProfile20171030PathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateFieldLevelEncryptionProfile20171030Headers headers;
    public UpdateFieldLevelEncryptionProfile20171030Request withHeaders(UpdateFieldLevelEncryptionProfile20171030Headers headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public UpdateFieldLevelEncryptionProfile20171030Request withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}