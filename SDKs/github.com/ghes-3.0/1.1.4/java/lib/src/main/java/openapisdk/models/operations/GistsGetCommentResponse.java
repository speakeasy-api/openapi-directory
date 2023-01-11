package openapisdk.models.operations;



public class GistsGetCommentResponse {
    public String contentType;
    public GistsGetCommentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GistsGetCommentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public GistsGetCommentResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.GistComment gistComment;
    public GistsGetCommentResponse withGistComment(openapisdk.models.shared.GistComment gistComment) {
        this.gistComment = gistComment;
        return this;
    }
    public GistsGetComment403ApplicationJson gistsGetComment403ApplicationJSONObject;
    public GistsGetCommentResponse withGistsGetComment403ApplicationJsonObject(GistsGetComment403ApplicationJson gistsGetComment403ApplicationJSONObject) {
        this.gistsGetComment403ApplicationJSONObject = gistsGetComment403ApplicationJSONObject;
        return this;
    }
}