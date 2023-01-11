package openapisdk.models.operations;



public class ListAllowedNodeTypeUpdatesResponse {
    public Object clusterNotFoundFault;
    public ListAllowedNodeTypeUpdatesResponse withClusterNotFoundFault(Object clusterNotFoundFault) {
        this.clusterNotFoundFault = clusterNotFoundFault;
        return this;
    }
    public String contentType;
    public ListAllowedNodeTypeUpdatesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParameterCombinationException;
    public ListAllowedNodeTypeUpdatesResponse withInvalidParameterCombinationException(Object invalidParameterCombinationException) {
        this.invalidParameterCombinationException = invalidParameterCombinationException;
        return this;
    }
    public Object invalidParameterValueException;
    public ListAllowedNodeTypeUpdatesResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public openapisdk.models.shared.ListAllowedNodeTypeUpdatesResponse listAllowedNodeTypeUpdatesResponse;
    public ListAllowedNodeTypeUpdatesResponse withListAllowedNodeTypeUpdatesResponse(openapisdk.models.shared.ListAllowedNodeTypeUpdatesResponse listAllowedNodeTypeUpdatesResponse) {
        this.listAllowedNodeTypeUpdatesResponse = listAllowedNodeTypeUpdatesResponse;
        return this;
    }
    public Object serviceLinkedRoleNotFoundFault;
    public ListAllowedNodeTypeUpdatesResponse withServiceLinkedRoleNotFoundFault(Object serviceLinkedRoleNotFoundFault) {
        this.serviceLinkedRoleNotFoundFault = serviceLinkedRoleNotFoundFault;
        return this;
    }
    public Long statusCode;
    public ListAllowedNodeTypeUpdatesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}