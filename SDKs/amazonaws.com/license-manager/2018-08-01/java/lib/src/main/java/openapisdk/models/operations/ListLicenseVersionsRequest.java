package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListLicenseVersionsRequest {
    public ListLicenseVersionsHeaders headers;
    public ListLicenseVersionsRequest withHeaders(ListLicenseVersionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListLicenseVersionsRequest request;
    public ListLicenseVersionsRequest withRequest(openapisdk.models.shared.ListLicenseVersionsRequest request) {
        this.request = request;
        return this;
    }
}