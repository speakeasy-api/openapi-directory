package openapisdk.models.operations;



public class DeleteNamedQueryResponse {
    public String contentType;
    public DeleteNamedQueryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteNamedQueryOutput;
    public DeleteNamedQueryResponse withDeleteNamedQueryOutput(java.util.Map<String, Object> deleteNamedQueryOutput) {
        this.deleteNamedQueryOutput = deleteNamedQueryOutput;
        return this;
    }
    public Object internalServerException;
    public DeleteNamedQueryResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidRequestException;
    public DeleteNamedQueryResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Long statusCode;
    public DeleteNamedQueryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}