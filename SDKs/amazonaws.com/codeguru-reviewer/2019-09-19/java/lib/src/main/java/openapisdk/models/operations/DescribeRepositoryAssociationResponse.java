package openapisdk.models.operations;



public class DescribeRepositoryAssociationResponse {
    public Object accessDeniedException;
    public DescribeRepositoryAssociationResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public DescribeRepositoryAssociationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeRepositoryAssociationResponse describeRepositoryAssociationResponse;
    public DescribeRepositoryAssociationResponse withDescribeRepositoryAssociationResponse(openapisdk.models.shared.DescribeRepositoryAssociationResponse describeRepositoryAssociationResponse) {
        this.describeRepositoryAssociationResponse = describeRepositoryAssociationResponse;
        return this;
    }
    public Object internalServerException;
    public DescribeRepositoryAssociationResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object notFoundException;
    public DescribeRepositoryAssociationResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeRepositoryAssociationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DescribeRepositoryAssociationResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public DescribeRepositoryAssociationResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}