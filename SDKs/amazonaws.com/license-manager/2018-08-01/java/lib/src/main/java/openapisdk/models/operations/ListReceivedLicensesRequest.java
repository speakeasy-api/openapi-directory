package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListReceivedLicensesRequest {
    public ListReceivedLicensesHeaders headers;
    public ListReceivedLicensesRequest withHeaders(ListReceivedLicensesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListReceivedLicensesRequest request;
    public ListReceivedLicensesRequest withRequest(openapisdk.models.shared.ListReceivedLicensesRequest request) {
        this.request = request;
        return this;
    }
}