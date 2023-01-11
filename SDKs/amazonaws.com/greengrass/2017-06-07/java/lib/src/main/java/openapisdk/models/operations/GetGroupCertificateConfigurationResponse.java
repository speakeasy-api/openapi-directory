package openapisdk.models.operations;



public class GetGroupCertificateConfigurationResponse {
    public Object badRequestException;
    public GetGroupCertificateConfigurationResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public GetGroupCertificateConfigurationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetGroupCertificateConfigurationResponse getGroupCertificateConfigurationResponse;
    public GetGroupCertificateConfigurationResponse withGetGroupCertificateConfigurationResponse(openapisdk.models.shared.GetGroupCertificateConfigurationResponse getGroupCertificateConfigurationResponse) {
        this.getGroupCertificateConfigurationResponse = getGroupCertificateConfigurationResponse;
        return this;
    }
    public Object internalServerErrorException;
    public GetGroupCertificateConfigurationResponse withInternalServerErrorException(Object internalServerErrorException) {
        this.internalServerErrorException = internalServerErrorException;
        return this;
    }
    public Long statusCode;
    public GetGroupCertificateConfigurationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}