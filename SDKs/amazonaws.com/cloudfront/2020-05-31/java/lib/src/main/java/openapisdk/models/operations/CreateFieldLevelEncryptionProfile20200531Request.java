package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateFieldLevelEncryptionProfile20200531Request {
    public CreateFieldLevelEncryptionProfile20200531Headers headers;
    public CreateFieldLevelEncryptionProfile20200531Request withHeaders(CreateFieldLevelEncryptionProfile20200531Headers headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public CreateFieldLevelEncryptionProfile20200531Request withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}