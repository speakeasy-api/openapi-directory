package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateFieldLevelEncryptionProfile20190326Request {
    public CreateFieldLevelEncryptionProfile20190326Headers headers;
    public CreateFieldLevelEncryptionProfile20190326Request withHeaders(CreateFieldLevelEncryptionProfile20190326Headers headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public CreateFieldLevelEncryptionProfile20190326Request withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}