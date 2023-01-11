package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListOfferingsRequest {
    public ListOfferingsQueryParams queryParams;
    public ListOfferingsRequest withQueryParams(ListOfferingsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListOfferingsHeaders headers;
    public ListOfferingsRequest withHeaders(ListOfferingsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListOfferingsRequest request;
    public ListOfferingsRequest withRequest(openapisdk.models.shared.ListOfferingsRequest request) {
        this.request = request;
        return this;
    }
}