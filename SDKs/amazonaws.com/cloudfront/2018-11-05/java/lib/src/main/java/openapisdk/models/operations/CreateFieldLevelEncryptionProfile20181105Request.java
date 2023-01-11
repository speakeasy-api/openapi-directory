package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateFieldLevelEncryptionProfile20181105Request {
    public CreateFieldLevelEncryptionProfile20181105Headers headers;
    public CreateFieldLevelEncryptionProfile20181105Request withHeaders(CreateFieldLevelEncryptionProfile20181105Headers headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public CreateFieldLevelEncryptionProfile20181105Request withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}