package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateDataSourceRequest {
    public UpdateDataSourceHeaders headers;
    public UpdateDataSourceRequest withHeaders(UpdateDataSourceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateDataSourceInput request;
    public UpdateDataSourceRequest withRequest(openapisdk.models.shared.UpdateDataSourceInput request) {
        this.request = request;
        return this;
    }
}