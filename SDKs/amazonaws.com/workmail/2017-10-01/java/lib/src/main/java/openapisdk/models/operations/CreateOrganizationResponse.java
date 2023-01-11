package openapisdk.models.operations;



public class CreateOrganizationResponse {
    public String contentType;
    public CreateOrganizationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateOrganizationResponse createOrganizationResponse;
    public CreateOrganizationResponse withCreateOrganizationResponse(openapisdk.models.shared.CreateOrganizationResponse createOrganizationResponse) {
        this.createOrganizationResponse = createOrganizationResponse;
        return this;
    }
    public Object directoryInUseException;
    public CreateOrganizationResponse withDirectoryInUseException(Object directoryInUseException) {
        this.directoryInUseException = directoryInUseException;
        return this;
    }
    public Object directoryUnavailableException;
    public CreateOrganizationResponse withDirectoryUnavailableException(Object directoryUnavailableException) {
        this.directoryUnavailableException = directoryUnavailableException;
        return this;
    }
    public Object invalidParameterException;
    public CreateOrganizationResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object limitExceededException;
    public CreateOrganizationResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object nameAvailabilityException;
    public CreateOrganizationResponse withNameAvailabilityException(Object nameAvailabilityException) {
        this.nameAvailabilityException = nameAvailabilityException;
        return this;
    }
    public Long statusCode;
    public CreateOrganizationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}