package openapisdk.models.operations;



public class ListAliasesResponse {
    public String contentType;
    public ListAliasesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServiceException;
    public ListAliasesResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidRequestException;
    public ListAliasesResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public openapisdk.models.shared.ListAliasesOutput listAliasesOutput;
    public ListAliasesResponse withListAliasesOutput(openapisdk.models.shared.ListAliasesOutput listAliasesOutput) {
        this.listAliasesOutput = listAliasesOutput;
        return this;
    }
    public Long statusCode;
    public ListAliasesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthorizedException;
    public ListAliasesResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}