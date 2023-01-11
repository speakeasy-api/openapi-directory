package openapisdk.models.operations;



public class GetMdsResponse {
    public String contentType;
    public GetMdsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetMdsResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.Mds mds;
    public GetMdsResponse withMds(openapisdk.models.shared.Mds mds) {
        this.mds = mds;
        return this;
    }
    public Long statusCode;
    public GetMdsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}