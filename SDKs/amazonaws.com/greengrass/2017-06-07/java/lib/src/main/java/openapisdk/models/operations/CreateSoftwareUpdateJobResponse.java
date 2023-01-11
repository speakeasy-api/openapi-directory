package openapisdk.models.operations;



public class CreateSoftwareUpdateJobResponse {
    public Object badRequestException;
    public CreateSoftwareUpdateJobResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public CreateSoftwareUpdateJobResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateSoftwareUpdateJobResponse createSoftwareUpdateJobResponse;
    public CreateSoftwareUpdateJobResponse withCreateSoftwareUpdateJobResponse(openapisdk.models.shared.CreateSoftwareUpdateJobResponse createSoftwareUpdateJobResponse) {
        this.createSoftwareUpdateJobResponse = createSoftwareUpdateJobResponse;
        return this;
    }
    public Object internalServerErrorException;
    public CreateSoftwareUpdateJobResponse withInternalServerErrorException(Object internalServerErrorException) {
        this.internalServerErrorException = internalServerErrorException;
        return this;
    }
    public Long statusCode;
    public CreateSoftwareUpdateJobResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}