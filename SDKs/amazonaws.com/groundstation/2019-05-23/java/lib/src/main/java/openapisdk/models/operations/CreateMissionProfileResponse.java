package openapisdk.models.operations;



public class CreateMissionProfileResponse {
    public String contentType;
    public CreateMissionProfileResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object dependencyException;
    public CreateMissionProfileResponse withDependencyException(Object dependencyException) {
        this.dependencyException = dependencyException;
        return this;
    }
    public Object invalidParameterException;
    public CreateMissionProfileResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public openapisdk.models.shared.MissionProfileIdResponse missionProfileIdResponse;
    public CreateMissionProfileResponse withMissionProfileIdResponse(openapisdk.models.shared.MissionProfileIdResponse missionProfileIdResponse) {
        this.missionProfileIdResponse = missionProfileIdResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public CreateMissionProfileResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public CreateMissionProfileResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}