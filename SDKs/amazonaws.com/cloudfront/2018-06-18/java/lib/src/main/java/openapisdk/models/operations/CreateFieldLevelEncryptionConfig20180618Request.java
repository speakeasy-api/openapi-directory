package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateFieldLevelEncryptionConfig20180618Request {
    public CreateFieldLevelEncryptionConfig20180618Headers headers;
    public CreateFieldLevelEncryptionConfig20180618Request withHeaders(CreateFieldLevelEncryptionConfig20180618Headers headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public CreateFieldLevelEncryptionConfig20180618Request withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}