package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ExportOrdersRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ExportOrderListRequest request;
    public ExportOrdersRequest withRequest(openapisdk.models.shared.ExportOrderListRequest request) {
        this.request = request;
        return this;
    }
}