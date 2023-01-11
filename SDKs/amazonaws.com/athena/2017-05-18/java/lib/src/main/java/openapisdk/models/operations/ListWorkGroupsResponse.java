package openapisdk.models.operations;



public class ListWorkGroupsResponse {
    public String contentType;
    public ListWorkGroupsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListWorkGroupsResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidRequestException;
    public ListWorkGroupsResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public openapisdk.models.shared.ListWorkGroupsOutput listWorkGroupsOutput;
    public ListWorkGroupsResponse withListWorkGroupsOutput(openapisdk.models.shared.ListWorkGroupsOutput listWorkGroupsOutput) {
        this.listWorkGroupsOutput = listWorkGroupsOutput;
        return this;
    }
    public Long statusCode;
    public ListWorkGroupsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}