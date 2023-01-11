package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchUploadStatusesRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UploadStatusQuery request;
    public FetchUploadStatusesRequest withRequest(openapisdk.models.shared.UploadStatusQuery request) {
        this.request = request;
        return this;
    }
    public FetchUploadStatusesSecurity security;
    public FetchUploadStatusesRequest withSecurity(FetchUploadStatusesSecurity security) {
        this.security = security;
        return this;
    }
}