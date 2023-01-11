package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class AppPkcs12P12File {
    @SpeakeasyMetadata("multipartForm:content")
    public byte[] content;
    public AppPkcs12P12File withContent(byte[] content) {
        this.content = content;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=p12File")
    public String p12File;
    public AppPkcs12P12File withP12File(String p12File) {
        this.p12File = p12File;
        return this;
    }
}