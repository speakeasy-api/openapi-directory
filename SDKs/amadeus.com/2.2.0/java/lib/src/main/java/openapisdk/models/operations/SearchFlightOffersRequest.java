package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SearchFlightOffersRequest {
    public SearchFlightOffersHeaders headers;
    public SearchFlightOffersRequest withHeaders(SearchFlightOffersHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/vnd.amadeus+json")
    public Object request;
    public SearchFlightOffersRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
}