package openapisdk.models.operations;



public class GetDataflowEndpointGroupResponse {
    public String contentType;
    public GetDataflowEndpointGroupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object dependencyException;
    public GetDataflowEndpointGroupResponse withDependencyException(Object dependencyException) {
        this.dependencyException = dependencyException;
        return this;
    }
    public openapisdk.models.shared.GetDataflowEndpointGroupResponse getDataflowEndpointGroupResponse;
    public GetDataflowEndpointGroupResponse withGetDataflowEndpointGroupResponse(openapisdk.models.shared.GetDataflowEndpointGroupResponse getDataflowEndpointGroupResponse) {
        this.getDataflowEndpointGroupResponse = getDataflowEndpointGroupResponse;
        return this;
    }
    public Object invalidParameterException;
    public GetDataflowEndpointGroupResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetDataflowEndpointGroupResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetDataflowEndpointGroupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}