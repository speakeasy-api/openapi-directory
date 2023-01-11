package openapisdk.models.operations;



public class ListContainersResponse {
    public String contentType;
    public ListContainersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerError;
    public ListContainersResponse withInternalServerError(Object internalServerError) {
        this.internalServerError = internalServerError;
        return this;
    }
    public openapisdk.models.shared.ListContainersOutput listContainersOutput;
    public ListContainersResponse withListContainersOutput(openapisdk.models.shared.ListContainersOutput listContainersOutput) {
        this.listContainersOutput = listContainersOutput;
        return this;
    }
    public Long statusCode;
    public ListContainersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}