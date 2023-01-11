package openapisdk.models.operations;



public class CatalogGetCustomColumnsResponse {
    public openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage;
    public CatalogGetCustomColumnsResponse withBeezUpCommonErrorResponseMessage(openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage) {
        this.beezUPCommonErrorResponseMessage = beezUPCommonErrorResponseMessage;
        return this;
    }
    public String contentType;
    public CatalogGetCustomColumnsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CatalogGetCustomColumnsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.CustomColumnList customColumnList;
    public CatalogGetCustomColumnsResponse withCustomColumnList(openapisdk.models.shared.CustomColumnList customColumnList) {
        this.customColumnList = customColumnList;
        return this;
    }
}