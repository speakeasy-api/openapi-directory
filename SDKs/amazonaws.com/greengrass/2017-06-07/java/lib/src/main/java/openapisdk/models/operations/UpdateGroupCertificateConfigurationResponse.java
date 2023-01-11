package openapisdk.models.operations;



public class UpdateGroupCertificateConfigurationResponse {
    public Object badRequestException;
    public UpdateGroupCertificateConfigurationResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public UpdateGroupCertificateConfigurationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerErrorException;
    public UpdateGroupCertificateConfigurationResponse withInternalServerErrorException(Object internalServerErrorException) {
        this.internalServerErrorException = internalServerErrorException;
        return this;
    }
    public Long statusCode;
    public UpdateGroupCertificateConfigurationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UpdateGroupCertificateConfigurationResponse updateGroupCertificateConfigurationResponse;
    public UpdateGroupCertificateConfigurationResponse withUpdateGroupCertificateConfigurationResponse(openapisdk.models.shared.UpdateGroupCertificateConfigurationResponse updateGroupCertificateConfigurationResponse) {
        this.updateGroupCertificateConfigurationResponse = updateGroupCertificateConfigurationResponse;
        return this;
    }
}