package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetEnrollmentStatusesForOrganizationRequest {
    public GetEnrollmentStatusesForOrganizationHeaders headers;
    public GetEnrollmentStatusesForOrganizationRequest withHeaders(GetEnrollmentStatusesForOrganizationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetEnrollmentStatusesForOrganizationRequest request;
    public GetEnrollmentStatusesForOrganizationRequest withRequest(openapisdk.models.shared.GetEnrollmentStatusesForOrganizationRequest request) {
        this.request = request;
        return this;
    }
}