package openapisdk.models.operations;



public class CreateTopicRuleDestinationResponse {
    public Object conflictingResourceUpdateException;
    public CreateTopicRuleDestinationResponse withConflictingResourceUpdateException(Object conflictingResourceUpdateException) {
        this.conflictingResourceUpdateException = conflictingResourceUpdateException;
        return this;
    }
    public String contentType;
    public CreateTopicRuleDestinationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateTopicRuleDestinationResponse createTopicRuleDestinationResponse;
    public CreateTopicRuleDestinationResponse withCreateTopicRuleDestinationResponse(openapisdk.models.shared.CreateTopicRuleDestinationResponse createTopicRuleDestinationResponse) {
        this.createTopicRuleDestinationResponse = createTopicRuleDestinationResponse;
        return this;
    }
    public Object internalException;
    public CreateTopicRuleDestinationResponse withInternalException(Object internalException) {
        this.internalException = internalException;
        return this;
    }
    public Object invalidRequestException;
    public CreateTopicRuleDestinationResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceAlreadyExistsException;
    public CreateTopicRuleDestinationResponse withResourceAlreadyExistsException(Object resourceAlreadyExistsException) {
        this.resourceAlreadyExistsException = resourceAlreadyExistsException;
        return this;
    }
    public Object serviceUnavailableException;
    public CreateTopicRuleDestinationResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public CreateTopicRuleDestinationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}