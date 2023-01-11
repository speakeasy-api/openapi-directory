package openapisdk.models.operations;



public class UpdateWorkGroupResponse {
    public String contentType;
    public UpdateWorkGroupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public UpdateWorkGroupResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidRequestException;
    public UpdateWorkGroupResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Long statusCode;
    public UpdateWorkGroupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> updateWorkGroupOutput;
    public UpdateWorkGroupResponse withUpdateWorkGroupOutput(java.util.Map<String, Object> updateWorkGroupOutput) {
        this.updateWorkGroupOutput = updateWorkGroupOutput;
        return this;
    }
}