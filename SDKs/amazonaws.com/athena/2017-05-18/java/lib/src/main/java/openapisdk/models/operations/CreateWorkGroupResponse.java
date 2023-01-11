package openapisdk.models.operations;



public class CreateWorkGroupResponse {
    public String contentType;
    public CreateWorkGroupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> createWorkGroupOutput;
    public CreateWorkGroupResponse withCreateWorkGroupOutput(java.util.Map<String, Object> createWorkGroupOutput) {
        this.createWorkGroupOutput = createWorkGroupOutput;
        return this;
    }
    public Object internalServerException;
    public CreateWorkGroupResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidRequestException;
    public CreateWorkGroupResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Long statusCode;
    public CreateWorkGroupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}