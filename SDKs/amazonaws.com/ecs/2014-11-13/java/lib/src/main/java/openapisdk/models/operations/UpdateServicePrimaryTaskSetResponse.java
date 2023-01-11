package openapisdk.models.operations;



public class UpdateServicePrimaryTaskSetResponse {
    public Object accessDeniedException;
    public UpdateServicePrimaryTaskSetResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object clientException;
    public UpdateServicePrimaryTaskSetResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public Object clusterNotFoundException;
    public UpdateServicePrimaryTaskSetResponse withClusterNotFoundException(Object clusterNotFoundException) {
        this.clusterNotFoundException = clusterNotFoundException;
        return this;
    }
    public String contentType;
    public UpdateServicePrimaryTaskSetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParameterException;
    public UpdateServicePrimaryTaskSetResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object serverException;
    public UpdateServicePrimaryTaskSetResponse withServerException(Object serverException) {
        this.serverException = serverException;
        return this;
    }
    public Object serviceNotActiveException;
    public UpdateServicePrimaryTaskSetResponse withServiceNotActiveException(Object serviceNotActiveException) {
        this.serviceNotActiveException = serviceNotActiveException;
        return this;
    }
    public Object serviceNotFoundException;
    public UpdateServicePrimaryTaskSetResponse withServiceNotFoundException(Object serviceNotFoundException) {
        this.serviceNotFoundException = serviceNotFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateServicePrimaryTaskSetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object taskSetNotFoundException;
    public UpdateServicePrimaryTaskSetResponse withTaskSetNotFoundException(Object taskSetNotFoundException) {
        this.taskSetNotFoundException = taskSetNotFoundException;
        return this;
    }
    public Object unsupportedFeatureException;
    public UpdateServicePrimaryTaskSetResponse withUnsupportedFeatureException(Object unsupportedFeatureException) {
        this.unsupportedFeatureException = unsupportedFeatureException;
        return this;
    }
    public openapisdk.models.shared.UpdateServicePrimaryTaskSetResponse updateServicePrimaryTaskSetResponse;
    public UpdateServicePrimaryTaskSetResponse withUpdateServicePrimaryTaskSetResponse(openapisdk.models.shared.UpdateServicePrimaryTaskSetResponse updateServicePrimaryTaskSetResponse) {
        this.updateServicePrimaryTaskSetResponse = updateServicePrimaryTaskSetResponse;
        return this;
    }
}