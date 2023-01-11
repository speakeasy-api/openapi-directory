package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SslSetupRequestBodyPrivatekeyFile {
    @SpeakeasyMetadata("multipartForm:content")
    public byte[] content;
    public SslSetupRequestBodyPrivatekeyFile withContent(byte[] content) {
        this.content = content;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=privatekeyFile")
    public String privatekeyFile;
    public SslSetupRequestBodyPrivatekeyFile withPrivatekeyFile(String privatekeyFile) {
        this.privatekeyFile = privatekeyFile;
        return this;
    }
}