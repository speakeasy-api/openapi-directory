package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ImportationConfigureCatalogColumnRequest {
    public ImportationConfigureCatalogColumnPathParams pathParams;
    public ImportationConfigureCatalogColumnRequest withPathParams(ImportationConfigureCatalogColumnPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ConfigureCatalogColumnCatalogRequest request;
    public ImportationConfigureCatalogColumnRequest withRequest(openapisdk.models.shared.ConfigureCatalogColumnCatalogRequest request) {
        this.request = request;
        return this;
    }
}