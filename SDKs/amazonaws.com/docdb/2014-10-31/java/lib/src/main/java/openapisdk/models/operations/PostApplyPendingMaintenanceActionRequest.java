package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostApplyPendingMaintenanceActionRequest {
    public PostApplyPendingMaintenanceActionQueryParams queryParams;
    public PostApplyPendingMaintenanceActionRequest withQueryParams(PostApplyPendingMaintenanceActionQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostApplyPendingMaintenanceActionHeaders headers;
    public PostApplyPendingMaintenanceActionRequest withHeaders(PostApplyPendingMaintenanceActionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostApplyPendingMaintenanceActionRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}