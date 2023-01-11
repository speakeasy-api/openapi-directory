package openapisdk.models.operations;



public class ArticleFilesResponse {
    public String contentType;
    public ArticleFilesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PublicFile[] publicFiles;
    public ArticleFilesResponse withPublicFiles(openapisdk.models.shared.PublicFile[] publicFiles) {
        this.publicFiles = publicFiles;
        return this;
    }
    public Long statusCode;
    public ArticleFilesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}