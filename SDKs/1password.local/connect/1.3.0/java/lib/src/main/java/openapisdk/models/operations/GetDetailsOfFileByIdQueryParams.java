package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDetailsOfFileByIdQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=inline_files")
    public Boolean inlineFiles;
    public GetDetailsOfFileByIdQueryParams withInlineFiles(Boolean inlineFiles) {
        this.inlineFiles = inlineFiles;
        return this;
    }
}