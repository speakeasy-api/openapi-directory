package openapisdk.models.operations;



public class GetNamedQueryResponse {
    public String contentType;
    public GetNamedQueryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetNamedQueryOutput getNamedQueryOutput;
    public GetNamedQueryResponse withGetNamedQueryOutput(openapisdk.models.shared.GetNamedQueryOutput getNamedQueryOutput) {
        this.getNamedQueryOutput = getNamedQueryOutput;
        return this;
    }
    public Object internalServerException;
    public GetNamedQueryResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidRequestException;
    public GetNamedQueryResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Long statusCode;
    public GetNamedQueryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}