package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListLicensesRequest {
    public ListLicensesHeaders headers;
    public ListLicensesRequest withHeaders(ListLicensesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListLicensesRequest request;
    public ListLicensesRequest withRequest(openapisdk.models.shared.ListLicensesRequest request) {
        this.request = request;
        return this;
    }
}