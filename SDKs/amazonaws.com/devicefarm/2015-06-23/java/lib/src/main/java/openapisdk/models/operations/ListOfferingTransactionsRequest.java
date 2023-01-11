package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListOfferingTransactionsRequest {
    public ListOfferingTransactionsQueryParams queryParams;
    public ListOfferingTransactionsRequest withQueryParams(ListOfferingTransactionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListOfferingTransactionsHeaders headers;
    public ListOfferingTransactionsRequest withHeaders(ListOfferingTransactionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListOfferingTransactionsRequest request;
    public ListOfferingTransactionsRequest withRequest(openapisdk.models.shared.ListOfferingTransactionsRequest request) {
        this.request = request;
        return this;
    }
}