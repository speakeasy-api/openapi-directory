package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchSiteRequestBodyIcon16File {
    @SpeakeasyMetadata("multipartForm:content")
    public byte[] content;
    public PatchSiteRequestBodyIcon16File withContent(byte[] content) {
        this.content = content;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=icon16_file")
    public String icon16File;
    public PatchSiteRequestBodyIcon16File withIcon16File(String icon16File) {
        this.icon16File = icon16File;
        return this;
    }
}