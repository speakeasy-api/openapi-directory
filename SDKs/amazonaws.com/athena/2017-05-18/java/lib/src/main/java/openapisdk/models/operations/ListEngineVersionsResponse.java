package openapisdk.models.operations;



public class ListEngineVersionsResponse {
    public String contentType;
    public ListEngineVersionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListEngineVersionsResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidRequestException;
    public ListEngineVersionsResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public openapisdk.models.shared.ListEngineVersionsOutput listEngineVersionsOutput;
    public ListEngineVersionsResponse withListEngineVersionsOutput(openapisdk.models.shared.ListEngineVersionsOutput listEngineVersionsOutput) {
        this.listEngineVersionsOutput = listEngineVersionsOutput;
        return this;
    }
    public Long statusCode;
    public ListEngineVersionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}