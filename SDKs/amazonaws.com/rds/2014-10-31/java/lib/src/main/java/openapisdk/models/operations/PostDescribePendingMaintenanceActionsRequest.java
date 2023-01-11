package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribePendingMaintenanceActionsRequest {
    public PostDescribePendingMaintenanceActionsQueryParams queryParams;
    public PostDescribePendingMaintenanceActionsRequest withQueryParams(PostDescribePendingMaintenanceActionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribePendingMaintenanceActionsHeaders headers;
    public PostDescribePendingMaintenanceActionsRequest withHeaders(PostDescribePendingMaintenanceActionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribePendingMaintenanceActionsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}