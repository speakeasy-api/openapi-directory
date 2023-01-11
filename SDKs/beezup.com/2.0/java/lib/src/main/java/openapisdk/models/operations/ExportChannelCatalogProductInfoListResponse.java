package openapisdk.models.operations;



public class ExportChannelCatalogProductInfoListResponse {
    public openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage;
    public ExportChannelCatalogProductInfoListResponse withBeezUpCommonErrorResponseMessage(openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage) {
        this.beezUPCommonErrorResponseMessage = beezUPCommonErrorResponseMessage;
        return this;
    }
    public openapisdk.models.shared.BeezUpCommonLink3 beezUPCommonLink3;
    public ExportChannelCatalogProductInfoListResponse withBeezUpCommonLink3(openapisdk.models.shared.BeezUpCommonLink3 beezUPCommonLink3) {
        this.beezUPCommonLink3 = beezUPCommonLink3;
        return this;
    }
    public String contentType;
    public ExportChannelCatalogProductInfoListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ExportChannelCatalogProductInfoListResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public ExportChannelCatalogProductInfoListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}