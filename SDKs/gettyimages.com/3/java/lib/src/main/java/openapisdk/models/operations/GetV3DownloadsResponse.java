package openapisdk.models.operations;



public class GetV3DownloadsResponse {
    public String contentType;
    public GetV3DownloadsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetDownloadsResponse getDownloadsResponse;
    public GetV3DownloadsResponse withGetDownloadsResponse(openapisdk.models.shared.GetDownloadsResponse getDownloadsResponse) {
        this.getDownloadsResponse = getDownloadsResponse;
        return this;
    }
    public Long statusCode;
    public GetV3DownloadsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}