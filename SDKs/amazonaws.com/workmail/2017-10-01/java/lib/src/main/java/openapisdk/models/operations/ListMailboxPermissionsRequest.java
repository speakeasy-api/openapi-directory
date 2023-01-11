package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListMailboxPermissionsRequest {
    public ListMailboxPermissionsQueryParams queryParams;
    public ListMailboxPermissionsRequest withQueryParams(ListMailboxPermissionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListMailboxPermissionsHeaders headers;
    public ListMailboxPermissionsRequest withHeaders(ListMailboxPermissionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListMailboxPermissionsRequest request;
    public ListMailboxPermissionsRequest withRequest(openapisdk.models.shared.ListMailboxPermissionsRequest request) {
        this.request = request;
        return this;
    }
}