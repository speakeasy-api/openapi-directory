package openapisdk.models.operations;



public class ListDataflowEndpointGroupsResponse {
    public String contentType;
    public ListDataflowEndpointGroupsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object dependencyException;
    public ListDataflowEndpointGroupsResponse withDependencyException(Object dependencyException) {
        this.dependencyException = dependencyException;
        return this;
    }
    public Object invalidParameterException;
    public ListDataflowEndpointGroupsResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public openapisdk.models.shared.ListDataflowEndpointGroupsResponse listDataflowEndpointGroupsResponse;
    public ListDataflowEndpointGroupsResponse withListDataflowEndpointGroupsResponse(openapisdk.models.shared.ListDataflowEndpointGroupsResponse listDataflowEndpointGroupsResponse) {
        this.listDataflowEndpointGroupsResponse = listDataflowEndpointGroupsResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public ListDataflowEndpointGroupsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ListDataflowEndpointGroupsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}