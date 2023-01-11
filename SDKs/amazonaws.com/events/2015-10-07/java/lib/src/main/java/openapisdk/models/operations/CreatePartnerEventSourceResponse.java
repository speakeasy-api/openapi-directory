package openapisdk.models.operations;



public class CreatePartnerEventSourceResponse {
    public Object concurrentModificationException;
    public CreatePartnerEventSourceResponse withConcurrentModificationException(Object concurrentModificationException) {
        this.concurrentModificationException = concurrentModificationException;
        return this;
    }
    public String contentType;
    public CreatePartnerEventSourceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreatePartnerEventSourceResponse createPartnerEventSourceResponse;
    public CreatePartnerEventSourceResponse withCreatePartnerEventSourceResponse(openapisdk.models.shared.CreatePartnerEventSourceResponse createPartnerEventSourceResponse) {
        this.createPartnerEventSourceResponse = createPartnerEventSourceResponse;
        return this;
    }
    public Object internalException;
    public CreatePartnerEventSourceResponse withInternalException(Object internalException) {
        this.internalException = internalException;
        return this;
    }
    public Object limitExceededException;
    public CreatePartnerEventSourceResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object operationDisabledException;
    public CreatePartnerEventSourceResponse withOperationDisabledException(Object operationDisabledException) {
        this.operationDisabledException = operationDisabledException;
        return this;
    }
    public Object resourceAlreadyExistsException;
    public CreatePartnerEventSourceResponse withResourceAlreadyExistsException(Object resourceAlreadyExistsException) {
        this.resourceAlreadyExistsException = resourceAlreadyExistsException;
        return this;
    }
    public Long statusCode;
    public CreatePartnerEventSourceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}