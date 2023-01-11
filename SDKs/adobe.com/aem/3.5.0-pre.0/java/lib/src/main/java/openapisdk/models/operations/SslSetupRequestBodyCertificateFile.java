package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SslSetupRequestBodyCertificateFile {
    @SpeakeasyMetadata("multipartForm:name=certificateFile")
    public String certificateFile;
    public SslSetupRequestBodyCertificateFile withCertificateFile(String certificateFile) {
        this.certificateFile = certificateFile;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:content")
    public byte[] content;
    public SslSetupRequestBodyCertificateFile withContent(byte[] content) {
        this.content = content;
        return this;
    }
}