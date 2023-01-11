package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListProtectionsRequest {
    public ListProtectionsQueryParams queryParams;
    public ListProtectionsRequest withQueryParams(ListProtectionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListProtectionsHeaders headers;
    public ListProtectionsRequest withHeaders(ListProtectionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListProtectionsRequest request;
    public ListProtectionsRequest withRequest(openapisdk.models.shared.ListProtectionsRequest request) {
        this.request = request;
        return this;
    }
}