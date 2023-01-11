package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListRemoteAccessSessionsRequest {
    public ListRemoteAccessSessionsHeaders headers;
    public ListRemoteAccessSessionsRequest withHeaders(ListRemoteAccessSessionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListRemoteAccessSessionsRequest request;
    public ListRemoteAccessSessionsRequest withRequest(openapisdk.models.shared.ListRemoteAccessSessionsRequest request) {
        this.request = request;
        return this;
    }
}