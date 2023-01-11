package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ChunkedUploadHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Content-Range")
    public String contentRange;
    public ChunkedUploadHeaders withContentRange(String contentRange) {
        this.contentRange = contentRange;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Content-Type")
    public String contentType;
    public ChunkedUploadHeaders withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
}