package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateFieldLevelEncryptionProfile20180618Request {
    public CreateFieldLevelEncryptionProfile20180618Headers headers;
    public CreateFieldLevelEncryptionProfile20180618Request withHeaders(CreateFieldLevelEncryptionProfile20180618Headers headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public CreateFieldLevelEncryptionProfile20180618Request withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}