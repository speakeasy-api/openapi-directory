package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRelationalDatabaseMetricDataRequest {
    public GetRelationalDatabaseMetricDataHeaders headers;
    public GetRelationalDatabaseMetricDataRequest withHeaders(GetRelationalDatabaseMetricDataHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetRelationalDatabaseMetricDataRequest request;
    public GetRelationalDatabaseMetricDataRequest withRequest(openapisdk.models.shared.GetRelationalDatabaseMetricDataRequest request) {
        this.request = request;
        return this;
    }
}