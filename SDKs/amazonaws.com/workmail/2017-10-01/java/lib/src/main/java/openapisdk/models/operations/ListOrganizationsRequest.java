package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListOrganizationsRequest {
    public ListOrganizationsQueryParams queryParams;
    public ListOrganizationsRequest withQueryParams(ListOrganizationsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListOrganizationsHeaders headers;
    public ListOrganizationsRequest withHeaders(ListOrganizationsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListOrganizationsRequest request;
    public ListOrganizationsRequest withRequest(openapisdk.models.shared.ListOrganizationsRequest request) {
        this.request = request;
        return this;
    }
}