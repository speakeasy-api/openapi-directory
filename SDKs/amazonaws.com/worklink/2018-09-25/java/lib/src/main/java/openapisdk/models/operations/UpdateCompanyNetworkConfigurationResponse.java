package openapisdk.models.operations;



public class UpdateCompanyNetworkConfigurationResponse {
    public String contentType;
    public UpdateCompanyNetworkConfigurationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerErrorException;
    public UpdateCompanyNetworkConfigurationResponse withInternalServerErrorException(Object internalServerErrorException) {
        this.internalServerErrorException = internalServerErrorException;
        return this;
    }
    public Object invalidRequestException;
    public UpdateCompanyNetworkConfigurationResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdateCompanyNetworkConfigurationResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateCompanyNetworkConfigurationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public UpdateCompanyNetworkConfigurationResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
    public Object unauthorizedException;
    public UpdateCompanyNetworkConfigurationResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
    public java.util.Map<String, Object> updateCompanyNetworkConfigurationResponse;
    public UpdateCompanyNetworkConfigurationResponse withUpdateCompanyNetworkConfigurationResponse(java.util.Map<String, Object> updateCompanyNetworkConfigurationResponse) {
        this.updateCompanyNetworkConfigurationResponse = updateCompanyNetworkConfigurationResponse;
        return this;
    }
}