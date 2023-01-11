package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateFieldLevelEncryptionProfile20171030Request {
    public CreateFieldLevelEncryptionProfile20171030Headers headers;
    public CreateFieldLevelEncryptionProfile20171030Request withHeaders(CreateFieldLevelEncryptionProfile20171030Headers headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public CreateFieldLevelEncryptionProfile20171030Request withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}