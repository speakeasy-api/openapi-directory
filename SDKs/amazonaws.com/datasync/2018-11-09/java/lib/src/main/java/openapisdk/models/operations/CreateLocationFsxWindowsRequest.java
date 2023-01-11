package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateLocationFsxWindowsRequest {
    public CreateLocationFsxWindowsHeaders headers;
    public CreateLocationFsxWindowsRequest withHeaders(CreateLocationFsxWindowsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateLocationFsxWindowsRequest request;
    public CreateLocationFsxWindowsRequest withRequest(openapisdk.models.shared.CreateLocationFsxWindowsRequest request) {
        this.request = request;
        return this;
    }
}