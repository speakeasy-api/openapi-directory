package openapisdk.models.operations;



public class CatalogChangeCustomColumnExpressionResponse {
    public openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage;
    public CatalogChangeCustomColumnExpressionResponse withBeezUpCommonErrorResponseMessage(openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage) {
        this.beezUPCommonErrorResponseMessage = beezUPCommonErrorResponseMessage;
        return this;
    }
    public String contentType;
    public CatalogChangeCustomColumnExpressionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CatalogChangeCustomColumnExpressionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ImportAlreadyInProgressResponse importAlreadyInProgressResponse;
    public CatalogChangeCustomColumnExpressionResponse withImportAlreadyInProgressResponse(openapisdk.models.shared.ImportAlreadyInProgressResponse importAlreadyInProgressResponse) {
        this.importAlreadyInProgressResponse = importAlreadyInProgressResponse;
        return this;
    }
}