package openapisdk.models.operations;



public class CatalogChangeCustomColumnUserNameResponse {
    public openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage;
    public CatalogChangeCustomColumnUserNameResponse withBeezUpCommonErrorResponseMessage(openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage) {
        this.beezUPCommonErrorResponseMessage = beezUPCommonErrorResponseMessage;
        return this;
    }
    public String contentType;
    public CatalogChangeCustomColumnUserNameResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CatalogChangeCustomColumnUserNameResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ImportAlreadyInProgressResponse importAlreadyInProgressResponse;
    public CatalogChangeCustomColumnUserNameResponse withImportAlreadyInProgressResponse(openapisdk.models.shared.ImportAlreadyInProgressResponse importAlreadyInProgressResponse) {
        this.importAlreadyInProgressResponse = importAlreadyInProgressResponse;
        return this;
    }
}