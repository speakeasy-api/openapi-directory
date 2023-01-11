package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AssociateProactiveEngagementDetailsRequest {
    public AssociateProactiveEngagementDetailsHeaders headers;
    public AssociateProactiveEngagementDetailsRequest withHeaders(AssociateProactiveEngagementDetailsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AssociateProactiveEngagementDetailsRequest request;
    public AssociateProactiveEngagementDetailsRequest withRequest(openapisdk.models.shared.AssociateProactiveEngagementDetailsRequest request) {
        this.request = request;
        return this;
    }
}