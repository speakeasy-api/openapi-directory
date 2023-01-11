package openapisdk.models.operations;



public class GetSearchV1OrganicResponse {
    public byte[] body;
    public GetSearchV1OrganicResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetSearchV1OrganicResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object error;
    public GetSearchV1OrganicResponse withError(Object error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.OrganicResult organicResult;
    public GetSearchV1OrganicResponse withOrganicResult(openapisdk.models.shared.OrganicResult organicResult) {
        this.organicResult = organicResult;
        return this;
    }
    public Long statusCode;
    public GetSearchV1OrganicResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}