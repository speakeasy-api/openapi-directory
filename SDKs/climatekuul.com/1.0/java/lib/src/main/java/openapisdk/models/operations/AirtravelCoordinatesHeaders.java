package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AirtravelCoordinatesHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Content-Type")
    public String contentType;
    public AirtravelCoordinatesHeaders withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
}