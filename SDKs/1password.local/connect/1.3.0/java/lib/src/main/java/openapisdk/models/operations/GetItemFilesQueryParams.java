package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetItemFilesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=inline_files")
    public Boolean inlineFiles;
    public GetItemFilesQueryParams withInlineFiles(Boolean inlineFiles) {
        this.inlineFiles = inlineFiles;
        return this;
    }
}