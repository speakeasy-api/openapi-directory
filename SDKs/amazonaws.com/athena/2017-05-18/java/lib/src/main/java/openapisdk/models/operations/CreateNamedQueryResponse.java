package openapisdk.models.operations;



public class CreateNamedQueryResponse {
    public String contentType;
    public CreateNamedQueryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateNamedQueryOutput createNamedQueryOutput;
    public CreateNamedQueryResponse withCreateNamedQueryOutput(openapisdk.models.shared.CreateNamedQueryOutput createNamedQueryOutput) {
        this.createNamedQueryOutput = createNamedQueryOutput;
        return this;
    }
    public Object internalServerException;
    public CreateNamedQueryResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidRequestException;
    public CreateNamedQueryResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Long statusCode;
    public CreateNamedQueryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}