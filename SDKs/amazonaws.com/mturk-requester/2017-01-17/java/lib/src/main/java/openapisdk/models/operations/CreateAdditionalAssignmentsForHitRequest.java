package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateAdditionalAssignmentsForHitRequest {
    public CreateAdditionalAssignmentsForHitHeaders headers;
    public CreateAdditionalAssignmentsForHitRequest withHeaders(CreateAdditionalAssignmentsForHitHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateAdditionalAssignmentsForHitRequest request;
    public CreateAdditionalAssignmentsForHitRequest withRequest(openapisdk.models.shared.CreateAdditionalAssignmentsForHitRequest request) {
        this.request = request;
        return this;
    }
}