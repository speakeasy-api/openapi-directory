package openapisdk.models.operations;



public class InvokeResponse {
    public String contentType;
    public InvokeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object ec2AccessDeniedException;
    public InvokeResponse withEc2AccessDeniedException(Object ec2AccessDeniedException) {
        this.ec2AccessDeniedException = ec2AccessDeniedException;
        return this;
    }
    public Object ec2ThrottledException;
    public InvokeResponse withEc2ThrottledException(Object ec2ThrottledException) {
        this.ec2ThrottledException = ec2ThrottledException;
        return this;
    }
    public Object ec2UnexpectedException;
    public InvokeResponse withEc2UnexpectedException(Object ec2UnexpectedException) {
        this.ec2UnexpectedException = ec2UnexpectedException;
        return this;
    }
    public Object efsioException;
    public InvokeResponse withEfsioException(Object efsioException) {
        this.efsioException = efsioException;
        return this;
    }
    public Object efsMountConnectivityException;
    public InvokeResponse withEfsMountConnectivityException(Object efsMountConnectivityException) {
        this.efsMountConnectivityException = efsMountConnectivityException;
        return this;
    }
    public Object efsMountFailureException;
    public InvokeResponse withEfsMountFailureException(Object efsMountFailureException) {
        this.efsMountFailureException = efsMountFailureException;
        return this;
    }
    public Object efsMountTimeoutException;
    public InvokeResponse withEfsMountTimeoutException(Object efsMountTimeoutException) {
        this.efsMountTimeoutException = efsMountTimeoutException;
        return this;
    }
    public Object eniLimitReachedException;
    public InvokeResponse withEniLimitReachedException(Object eniLimitReachedException) {
        this.eniLimitReachedException = eniLimitReachedException;
        return this;
    }
    public Object invalidParameterValueException;
    public InvokeResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public Object invalidRequestContentException;
    public InvokeResponse withInvalidRequestContentException(Object invalidRequestContentException) {
        this.invalidRequestContentException = invalidRequestContentException;
        return this;
    }
    public Object invalidRuntimeException;
    public InvokeResponse withInvalidRuntimeException(Object invalidRuntimeException) {
        this.invalidRuntimeException = invalidRuntimeException;
        return this;
    }
    public Object invalidSecurityGroupIDException;
    public InvokeResponse withInvalidSecurityGroupIdException(Object invalidSecurityGroupIDException) {
        this.invalidSecurityGroupIDException = invalidSecurityGroupIDException;
        return this;
    }
    public Object invalidSubnetIDException;
    public InvokeResponse withInvalidSubnetIdException(Object invalidSubnetIDException) {
        this.invalidSubnetIDException = invalidSubnetIDException;
        return this;
    }
    public Object invalidZipFileException;
    public InvokeResponse withInvalidZipFileException(Object invalidZipFileException) {
        this.invalidZipFileException = invalidZipFileException;
        return this;
    }
    public openapisdk.models.shared.InvocationResponse invocationResponse;
    public InvokeResponse withInvocationResponse(openapisdk.models.shared.InvocationResponse invocationResponse) {
        this.invocationResponse = invocationResponse;
        return this;
    }
    public Object kmsAccessDeniedException;
    public InvokeResponse withKmsAccessDeniedException(Object kmsAccessDeniedException) {
        this.kmsAccessDeniedException = kmsAccessDeniedException;
        return this;
    }
    public Object kmsDisabledException;
    public InvokeResponse withKmsDisabledException(Object kmsDisabledException) {
        this.kmsDisabledException = kmsDisabledException;
        return this;
    }
    public Object kmsInvalidStateException;
    public InvokeResponse withKmsInvalidStateException(Object kmsInvalidStateException) {
        this.kmsInvalidStateException = kmsInvalidStateException;
        return this;
    }
    public Object kmsNotFoundException;
    public InvokeResponse withKmsNotFoundException(Object kmsNotFoundException) {
        this.kmsNotFoundException = kmsNotFoundException;
        return this;
    }
    public Object requestTooLargeException;
    public InvokeResponse withRequestTooLargeException(Object requestTooLargeException) {
        this.requestTooLargeException = requestTooLargeException;
        return this;
    }
    public Object resourceConflictException;
    public InvokeResponse withResourceConflictException(Object resourceConflictException) {
        this.resourceConflictException = resourceConflictException;
        return this;
    }
    public Object resourceNotFoundException;
    public InvokeResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object resourceNotReadyException;
    public InvokeResponse withResourceNotReadyException(Object resourceNotReadyException) {
        this.resourceNotReadyException = resourceNotReadyException;
        return this;
    }
    public Object serviceException;
    public InvokeResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public InvokeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object subnetIPAddressLimitReachedException;
    public InvokeResponse withSubnetIpAddressLimitReachedException(Object subnetIPAddressLimitReachedException) {
        this.subnetIPAddressLimitReachedException = subnetIPAddressLimitReachedException;
        return this;
    }
    public Object tooManyRequestsException;
    public InvokeResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
    public Object unsupportedMediaTypeException;
    public InvokeResponse withUnsupportedMediaTypeException(Object unsupportedMediaTypeException) {
        this.unsupportedMediaTypeException = unsupportedMediaTypeException;
        return this;
    }
}