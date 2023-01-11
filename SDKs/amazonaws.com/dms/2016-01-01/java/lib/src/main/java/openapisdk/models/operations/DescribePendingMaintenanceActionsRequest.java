package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribePendingMaintenanceActionsRequest {
    public DescribePendingMaintenanceActionsQueryParams queryParams;
    public DescribePendingMaintenanceActionsRequest withQueryParams(DescribePendingMaintenanceActionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DescribePendingMaintenanceActionsHeaders headers;
    public DescribePendingMaintenanceActionsRequest withHeaders(DescribePendingMaintenanceActionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribePendingMaintenanceActionsMessage request;
    public DescribePendingMaintenanceActionsRequest withRequest(openapisdk.models.shared.DescribePendingMaintenanceActionsMessage request) {
        this.request = request;
        return this;
    }
}