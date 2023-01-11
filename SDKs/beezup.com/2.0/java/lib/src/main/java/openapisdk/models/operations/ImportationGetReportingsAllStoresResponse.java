package openapisdk.models.operations;



public class ImportationGetReportingsAllStoresResponse {
    public openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage;
    public ImportationGetReportingsAllStoresResponse withBeezUpCommonErrorResponseMessage(openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage) {
        this.beezUPCommonErrorResponseMessage = beezUPCommonErrorResponseMessage;
        return this;
    }
    public String contentType;
    public ImportationGetReportingsAllStoresResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ImportationGetReportingsAllStoresResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, openapisdk.models.shared.ImportationsResponse> importationsPerStoreResponse;
    public ImportationGetReportingsAllStoresResponse withImportationsPerStoreResponse(java.util.Map<String, openapisdk.models.shared.ImportationsResponse> importationsPerStoreResponse) {
        this.importationsPerStoreResponse = importationsPerStoreResponse;
        return this;
    }
}