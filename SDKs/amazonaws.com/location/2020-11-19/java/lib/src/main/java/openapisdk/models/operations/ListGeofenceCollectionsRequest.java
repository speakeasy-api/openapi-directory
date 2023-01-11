package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListGeofenceCollectionsRequest {
    public ListGeofenceCollectionsQueryParams queryParams;
    public ListGeofenceCollectionsRequest withQueryParams(ListGeofenceCollectionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListGeofenceCollectionsHeaders headers;
    public ListGeofenceCollectionsRequest withHeaders(ListGeofenceCollectionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ListGeofenceCollectionsRequestBody request;
    public ListGeofenceCollectionsRequest withRequest(ListGeofenceCollectionsRequestBody request) {
        this.request = request;
        return this;
    }
}