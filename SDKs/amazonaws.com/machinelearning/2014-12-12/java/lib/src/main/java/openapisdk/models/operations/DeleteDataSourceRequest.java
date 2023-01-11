package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteDataSourceRequest {
    public DeleteDataSourceHeaders headers;
    public DeleteDataSourceRequest withHeaders(DeleteDataSourceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteDataSourceInput request;
    public DeleteDataSourceRequest withRequest(openapisdk.models.shared.DeleteDataSourceInput request) {
        this.request = request;
        return this;
    }
}