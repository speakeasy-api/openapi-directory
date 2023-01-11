package openapisdk.models.operations;



public class GetWorkGroupResponse {
    public String contentType;
    public GetWorkGroupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetWorkGroupOutput getWorkGroupOutput;
    public GetWorkGroupResponse withGetWorkGroupOutput(openapisdk.models.shared.GetWorkGroupOutput getWorkGroupOutput) {
        this.getWorkGroupOutput = getWorkGroupOutput;
        return this;
    }
    public Object internalServerException;
    public GetWorkGroupResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidRequestException;
    public GetWorkGroupResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Long statusCode;
    public GetWorkGroupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}