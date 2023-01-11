package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateOrganizationExportRequest {
    public CreateOrganizationExportQueryParams queryParams;
    public CreateOrganizationExportRequest withQueryParams(CreateOrganizationExportQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateOrganizationExportRequestBody request;
    public CreateOrganizationExportRequest withRequest(CreateOrganizationExportRequestBody request) {
        this.request = request;
        return this;
    }
}