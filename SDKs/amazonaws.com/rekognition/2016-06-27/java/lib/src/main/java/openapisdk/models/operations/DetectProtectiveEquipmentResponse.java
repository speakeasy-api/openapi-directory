package openapisdk.models.operations;



public class DetectProtectiveEquipmentResponse {
    public Object accessDeniedException;
    public DetectProtectiveEquipmentResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public DetectProtectiveEquipmentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DetectProtectiveEquipmentResponse detectProtectiveEquipmentResponse;
    public DetectProtectiveEquipmentResponse withDetectProtectiveEquipmentResponse(openapisdk.models.shared.DetectProtectiveEquipmentResponse detectProtectiveEquipmentResponse) {
        this.detectProtectiveEquipmentResponse = detectProtectiveEquipmentResponse;
        return this;
    }
    public Object imageTooLargeException;
    public DetectProtectiveEquipmentResponse withImageTooLargeException(Object imageTooLargeException) {
        this.imageTooLargeException = imageTooLargeException;
        return this;
    }
    public Object internalServerError;
    public DetectProtectiveEquipmentResponse withInternalServerError(Object internalServerError) {
        this.internalServerError = internalServerError;
        return this;
    }
    public Object invalidImageFormatException;
    public DetectProtectiveEquipmentResponse withInvalidImageFormatException(Object invalidImageFormatException) {
        this.invalidImageFormatException = invalidImageFormatException;
        return this;
    }
    public Object invalidParameterException;
    public DetectProtectiveEquipmentResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object invalidS3ObjectException;
    public DetectProtectiveEquipmentResponse withInvalidS3ObjectException(Object invalidS3ObjectException) {
        this.invalidS3ObjectException = invalidS3ObjectException;
        return this;
    }
    public Object provisionedThroughputExceededException;
    public DetectProtectiveEquipmentResponse withProvisionedThroughputExceededException(Object provisionedThroughputExceededException) {
        this.provisionedThroughputExceededException = provisionedThroughputExceededException;
        return this;
    }
    public Long statusCode;
    public DetectProtectiveEquipmentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DetectProtectiveEquipmentResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}