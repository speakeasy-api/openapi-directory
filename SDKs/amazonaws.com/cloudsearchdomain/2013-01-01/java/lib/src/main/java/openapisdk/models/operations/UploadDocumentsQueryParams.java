package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UploadDocumentsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=format")
    public UploadDocumentsFormatEnum format;
    public UploadDocumentsQueryParams withFormat(UploadDocumentsFormatEnum format) {
        this.format = format;
        return this;
    }
}