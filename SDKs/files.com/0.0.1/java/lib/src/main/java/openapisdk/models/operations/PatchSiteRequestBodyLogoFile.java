package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchSiteRequestBodyLogoFile {
    @SpeakeasyMetadata("multipartForm:content")
    public byte[] content;
    public PatchSiteRequestBodyLogoFile withContent(byte[] content) {
        this.content = content;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=logo_file")
    public String logoFile;
    public PatchSiteRequestBodyLogoFile withLogoFile(String logoFile) {
        this.logoFile = logoFile;
        return this;
    }
}