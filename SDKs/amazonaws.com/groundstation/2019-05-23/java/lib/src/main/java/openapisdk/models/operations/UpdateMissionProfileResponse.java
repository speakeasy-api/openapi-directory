package openapisdk.models.operations;



public class UpdateMissionProfileResponse {
    public String contentType;
    public UpdateMissionProfileResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object dependencyException;
    public UpdateMissionProfileResponse withDependencyException(Object dependencyException) {
        this.dependencyException = dependencyException;
        return this;
    }
    public Object invalidParameterException;
    public UpdateMissionProfileResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public openapisdk.models.shared.MissionProfileIdResponse missionProfileIdResponse;
    public UpdateMissionProfileResponse withMissionProfileIdResponse(openapisdk.models.shared.MissionProfileIdResponse missionProfileIdResponse) {
        this.missionProfileIdResponse = missionProfileIdResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdateMissionProfileResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateMissionProfileResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}