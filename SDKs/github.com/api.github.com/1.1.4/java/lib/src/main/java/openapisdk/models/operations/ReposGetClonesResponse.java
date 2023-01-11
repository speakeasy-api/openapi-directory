package openapisdk.models.operations;



public class ReposGetClonesResponse {
    public String contentType;
    public ReposGetClonesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ReposGetClonesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public ReposGetClonesResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.CloneTraffic cloneTraffic;
    public ReposGetClonesResponse withCloneTraffic(openapisdk.models.shared.CloneTraffic cloneTraffic) {
        this.cloneTraffic = cloneTraffic;
        return this;
    }
}