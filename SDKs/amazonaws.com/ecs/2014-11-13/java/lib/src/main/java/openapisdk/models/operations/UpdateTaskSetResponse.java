package openapisdk.models.operations;



public class UpdateTaskSetResponse {
    public Object accessDeniedException;
    public UpdateTaskSetResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object clientException;
    public UpdateTaskSetResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public Object clusterNotFoundException;
    public UpdateTaskSetResponse withClusterNotFoundException(Object clusterNotFoundException) {
        this.clusterNotFoundException = clusterNotFoundException;
        return this;
    }
    public String contentType;
    public UpdateTaskSetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParameterException;
    public UpdateTaskSetResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object serverException;
    public UpdateTaskSetResponse withServerException(Object serverException) {
        this.serverException = serverException;
        return this;
    }
    public Object serviceNotActiveException;
    public UpdateTaskSetResponse withServiceNotActiveException(Object serviceNotActiveException) {
        this.serviceNotActiveException = serviceNotActiveException;
        return this;
    }
    public Object serviceNotFoundException;
    public UpdateTaskSetResponse withServiceNotFoundException(Object serviceNotFoundException) {
        this.serviceNotFoundException = serviceNotFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateTaskSetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object taskSetNotFoundException;
    public UpdateTaskSetResponse withTaskSetNotFoundException(Object taskSetNotFoundException) {
        this.taskSetNotFoundException = taskSetNotFoundException;
        return this;
    }
    public Object unsupportedFeatureException;
    public UpdateTaskSetResponse withUnsupportedFeatureException(Object unsupportedFeatureException) {
        this.unsupportedFeatureException = unsupportedFeatureException;
        return this;
    }
    public openapisdk.models.shared.UpdateTaskSetResponse updateTaskSetResponse;
    public UpdateTaskSetResponse withUpdateTaskSetResponse(openapisdk.models.shared.UpdateTaskSetResponse updateTaskSetResponse) {
        this.updateTaskSetResponse = updateTaskSetResponse;
        return this;
    }
}