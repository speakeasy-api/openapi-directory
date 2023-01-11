package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchSiteRequestBodyIcon32File {
    @SpeakeasyMetadata("multipartForm:content")
    public byte[] content;
    public PatchSiteRequestBodyIcon32File withContent(byte[] content) {
        this.content = content;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=icon32_file")
    public String icon32File;
    public PatchSiteRequestBodyIcon32File withIcon32File(String icon32File) {
        this.icon32File = icon32File;
        return this;
    }
}