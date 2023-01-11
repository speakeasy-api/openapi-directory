package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AdminListUserAuthEventsRequest {
    public AdminListUserAuthEventsQueryParams queryParams;
    public AdminListUserAuthEventsRequest withQueryParams(AdminListUserAuthEventsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public AdminListUserAuthEventsHeaders headers;
    public AdminListUserAuthEventsRequest withHeaders(AdminListUserAuthEventsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AdminListUserAuthEventsRequest request;
    public AdminListUserAuthEventsRequest withRequest(openapisdk.models.shared.AdminListUserAuthEventsRequest request) {
        this.request = request;
        return this;
    }
}