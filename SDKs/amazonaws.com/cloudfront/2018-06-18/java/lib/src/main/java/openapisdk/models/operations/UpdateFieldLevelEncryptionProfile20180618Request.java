package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateFieldLevelEncryptionProfile20180618Request {
    public UpdateFieldLevelEncryptionProfile20180618PathParams pathParams;
    public UpdateFieldLevelEncryptionProfile20180618Request withPathParams(UpdateFieldLevelEncryptionProfile20180618PathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateFieldLevelEncryptionProfile20180618Headers headers;
    public UpdateFieldLevelEncryptionProfile20180618Request withHeaders(UpdateFieldLevelEncryptionProfile20180618Headers headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public UpdateFieldLevelEncryptionProfile20180618Request withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}