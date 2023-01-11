package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BatchGetOnPremisesInstancesRequest {
    public BatchGetOnPremisesInstancesHeaders headers;
    public BatchGetOnPremisesInstancesRequest withHeaders(BatchGetOnPremisesInstancesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BatchGetOnPremisesInstancesInput request;
    public BatchGetOnPremisesInstancesRequest withRequest(openapisdk.models.shared.BatchGetOnPremisesInstancesInput request) {
        this.request = request;
        return this;
    }
}