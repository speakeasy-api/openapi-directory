package openapisdk.models.operations;



public class ArticleFileDetailsResponse {
    public String contentType;
    public ArticleFileDetailsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PublicFile publicFile;
    public ArticleFileDetailsResponse withPublicFile(openapisdk.models.shared.PublicFile publicFile) {
        this.publicFile = publicFile;
        return this;
    }
    public Long statusCode;
    public ArticleFileDetailsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}