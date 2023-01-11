package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LibreConvertPostRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.LibreOfficeConvertRequest request;
    public LibreConvertPostRequest withRequest(openapisdk.models.shared.LibreOfficeConvertRequest request) {
        this.request = request;
        return this;
    }
}