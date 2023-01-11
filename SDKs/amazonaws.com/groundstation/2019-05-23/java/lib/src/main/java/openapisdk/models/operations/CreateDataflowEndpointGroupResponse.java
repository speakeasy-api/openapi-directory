package openapisdk.models.operations;



public class CreateDataflowEndpointGroupResponse {
    public String contentType;
    public CreateDataflowEndpointGroupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DataflowEndpointGroupIdResponse dataflowEndpointGroupIdResponse;
    public CreateDataflowEndpointGroupResponse withDataflowEndpointGroupIdResponse(openapisdk.models.shared.DataflowEndpointGroupIdResponse dataflowEndpointGroupIdResponse) {
        this.dataflowEndpointGroupIdResponse = dataflowEndpointGroupIdResponse;
        return this;
    }
    public Object dependencyException;
    public CreateDataflowEndpointGroupResponse withDependencyException(Object dependencyException) {
        this.dependencyException = dependencyException;
        return this;
    }
    public Object invalidParameterException;
    public CreateDataflowEndpointGroupResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object resourceNotFoundException;
    public CreateDataflowEndpointGroupResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public CreateDataflowEndpointGroupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}