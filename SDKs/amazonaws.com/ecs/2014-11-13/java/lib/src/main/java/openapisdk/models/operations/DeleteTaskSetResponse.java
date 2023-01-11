package openapisdk.models.operations;



public class DeleteTaskSetResponse {
    public Object accessDeniedException;
    public DeleteTaskSetResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object clientException;
    public DeleteTaskSetResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public Object clusterNotFoundException;
    public DeleteTaskSetResponse withClusterNotFoundException(Object clusterNotFoundException) {
        this.clusterNotFoundException = clusterNotFoundException;
        return this;
    }
    public String contentType;
    public DeleteTaskSetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteTaskSetResponse deleteTaskSetResponse;
    public DeleteTaskSetResponse withDeleteTaskSetResponse(openapisdk.models.shared.DeleteTaskSetResponse deleteTaskSetResponse) {
        this.deleteTaskSetResponse = deleteTaskSetResponse;
        return this;
    }
    public Object invalidParameterException;
    public DeleteTaskSetResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object serverException;
    public DeleteTaskSetResponse withServerException(Object serverException) {
        this.serverException = serverException;
        return this;
    }
    public Object serviceNotActiveException;
    public DeleteTaskSetResponse withServiceNotActiveException(Object serviceNotActiveException) {
        this.serviceNotActiveException = serviceNotActiveException;
        return this;
    }
    public Object serviceNotFoundException;
    public DeleteTaskSetResponse withServiceNotFoundException(Object serviceNotFoundException) {
        this.serviceNotFoundException = serviceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteTaskSetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object taskSetNotFoundException;
    public DeleteTaskSetResponse withTaskSetNotFoundException(Object taskSetNotFoundException) {
        this.taskSetNotFoundException = taskSetNotFoundException;
        return this;
    }
    public Object unsupportedFeatureException;
    public DeleteTaskSetResponse withUnsupportedFeatureException(Object unsupportedFeatureException) {
        this.unsupportedFeatureException = unsupportedFeatureException;
        return this;
    }
}