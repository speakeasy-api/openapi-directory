package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateUrlsExportRequest {
    public CreateUrlsExportPathParams pathParams;
    public CreateUrlsExportRequest withPathParams(CreateUrlsExportPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CreateUrlsExportQueryParams queryParams;
    public CreateUrlsExportRequest withQueryParams(CreateUrlsExportQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UrlsQuery request;
    public CreateUrlsExportRequest withRequest(openapisdk.models.shared.UrlsQuery request) {
        this.request = request;
        return this;
    }
}