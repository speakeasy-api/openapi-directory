package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListApiDestinationsRequest {
    public ListApiDestinationsHeaders headers;
    public ListApiDestinationsRequest withHeaders(ListApiDestinationsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListApiDestinationsRequest request;
    public ListApiDestinationsRequest withRequest(openapisdk.models.shared.ListApiDestinationsRequest request) {
        this.request = request;
        return this;
    }
}