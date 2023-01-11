package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateFieldLevelEncryptionConfig20200531Request {
    public CreateFieldLevelEncryptionConfig20200531Headers headers;
    public CreateFieldLevelEncryptionConfig20200531Request withHeaders(CreateFieldLevelEncryptionConfig20200531Headers headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public CreateFieldLevelEncryptionConfig20200531Request withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}