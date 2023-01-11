package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifyClusterMaintenanceRequest {
    public PostModifyClusterMaintenanceQueryParams queryParams;
    public PostModifyClusterMaintenanceRequest withQueryParams(PostModifyClusterMaintenanceQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostModifyClusterMaintenanceHeaders headers;
    public PostModifyClusterMaintenanceRequest withHeaders(PostModifyClusterMaintenanceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostModifyClusterMaintenanceRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}