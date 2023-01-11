package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchSiteRequestBodyIcon48File {
    @SpeakeasyMetadata("multipartForm:content")
    public byte[] content;
    public PatchSiteRequestBodyIcon48File withContent(byte[] content) {
        this.content = content;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=icon48_file")
    public String icon48File;
    public PatchSiteRequestBodyIcon48File withIcon48File(String icon48File) {
        this.icon48File = icon48File;
        return this;
    }
}