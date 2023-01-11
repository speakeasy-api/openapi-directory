package openapisdk.models.operations;



public class GistsListForksResponse {
    public String contentType;
    public GistsListForksResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GistsListForksResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GistsListForksResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public GistsListForksResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.GistSimple[] gistSimples;
    public GistsListForksResponse withGistSimples(openapisdk.models.shared.GistSimple[] gistSimples) {
        this.gistSimples = gistSimples;
        return this;
    }
}