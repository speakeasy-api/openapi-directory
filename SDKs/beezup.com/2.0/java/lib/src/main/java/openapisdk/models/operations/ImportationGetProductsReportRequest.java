package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ImportationGetProductsReportRequest {
    public ImportationGetProductsReportPathParams pathParams;
    public ImportationGetProductsReportRequest withPathParams(ImportationGetProductsReportPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetImportationProductsReportRequest request;
    public ImportationGetProductsReportRequest withRequest(openapisdk.models.shared.GetImportationProductsReportRequest request) {
        this.request = request;
        return this;
    }
}