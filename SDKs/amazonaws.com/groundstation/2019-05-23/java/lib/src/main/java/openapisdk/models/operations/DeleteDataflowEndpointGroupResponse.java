package openapisdk.models.operations;



public class DeleteDataflowEndpointGroupResponse {
    public String contentType;
    public DeleteDataflowEndpointGroupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DataflowEndpointGroupIdResponse dataflowEndpointGroupIdResponse;
    public DeleteDataflowEndpointGroupResponse withDataflowEndpointGroupIdResponse(openapisdk.models.shared.DataflowEndpointGroupIdResponse dataflowEndpointGroupIdResponse) {
        this.dataflowEndpointGroupIdResponse = dataflowEndpointGroupIdResponse;
        return this;
    }
    public Object dependencyException;
    public DeleteDataflowEndpointGroupResponse withDependencyException(Object dependencyException) {
        this.dependencyException = dependencyException;
        return this;
    }
    public Object invalidParameterException;
    public DeleteDataflowEndpointGroupResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteDataflowEndpointGroupResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteDataflowEndpointGroupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}