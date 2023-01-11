package openapisdk.models.operations;



public class ListResolverRuleAssociationsResponse {
    public String contentType;
    public ListResolverRuleAssociationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServiceErrorException;
    public ListResolverRuleAssociationsResponse withInternalServiceErrorException(Object internalServiceErrorException) {
        this.internalServiceErrorException = internalServiceErrorException;
        return this;
    }
    public Object invalidNextTokenException;
    public ListResolverRuleAssociationsResponse withInvalidNextTokenException(Object invalidNextTokenException) {
        this.invalidNextTokenException = invalidNextTokenException;
        return this;
    }
    public Object invalidParameterException;
    public ListResolverRuleAssociationsResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object invalidRequestException;
    public ListResolverRuleAssociationsResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public openapisdk.models.shared.ListResolverRuleAssociationsResponse listResolverRuleAssociationsResponse;
    public ListResolverRuleAssociationsResponse withListResolverRuleAssociationsResponse(openapisdk.models.shared.ListResolverRuleAssociationsResponse listResolverRuleAssociationsResponse) {
        this.listResolverRuleAssociationsResponse = listResolverRuleAssociationsResponse;
        return this;
    }
    public Long statusCode;
    public ListResolverRuleAssociationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListResolverRuleAssociationsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}