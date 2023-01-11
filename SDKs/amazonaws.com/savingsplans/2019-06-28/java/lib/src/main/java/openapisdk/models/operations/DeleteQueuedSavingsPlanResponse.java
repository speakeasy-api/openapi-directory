package openapisdk.models.operations;



public class DeleteQueuedSavingsPlanResponse {
    public String contentType;
    public DeleteQueuedSavingsPlanResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteQueuedSavingsPlanResponse;
    public DeleteQueuedSavingsPlanResponse withDeleteQueuedSavingsPlanResponse(java.util.Map<String, Object> deleteQueuedSavingsPlanResponse) {
        this.deleteQueuedSavingsPlanResponse = deleteQueuedSavingsPlanResponse;
        return this;
    }
    public Object internalServerException;
    public DeleteQueuedSavingsPlanResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteQueuedSavingsPlanResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public DeleteQueuedSavingsPlanResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public DeleteQueuedSavingsPlanResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public DeleteQueuedSavingsPlanResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}