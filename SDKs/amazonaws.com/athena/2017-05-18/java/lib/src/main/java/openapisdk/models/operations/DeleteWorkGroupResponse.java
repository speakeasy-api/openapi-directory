package openapisdk.models.operations;



public class DeleteWorkGroupResponse {
    public String contentType;
    public DeleteWorkGroupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteWorkGroupOutput;
    public DeleteWorkGroupResponse withDeleteWorkGroupOutput(java.util.Map<String, Object> deleteWorkGroupOutput) {
        this.deleteWorkGroupOutput = deleteWorkGroupOutput;
        return this;
    }
    public Object internalServerException;
    public DeleteWorkGroupResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidRequestException;
    public DeleteWorkGroupResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Long statusCode;
    public DeleteWorkGroupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}