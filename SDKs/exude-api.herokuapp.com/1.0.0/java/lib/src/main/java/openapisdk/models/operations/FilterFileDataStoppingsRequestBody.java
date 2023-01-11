package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FilterFileDataStoppingsRequestBody {
    @SpeakeasyMetadata("multipartForm:file")
    public FilterFileDataStoppingsRequestBodyFile file;
    public FilterFileDataStoppingsRequestBody withFile(FilterFileDataStoppingsRequestBodyFile file) {
        this.file = file;
        return this;
    }
}