package openapisdk.models.operations;



public class DeleteMissionProfileResponse {
    public String contentType;
    public DeleteMissionProfileResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object dependencyException;
    public DeleteMissionProfileResponse withDependencyException(Object dependencyException) {
        this.dependencyException = dependencyException;
        return this;
    }
    public Object invalidParameterException;
    public DeleteMissionProfileResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public openapisdk.models.shared.MissionProfileIdResponse missionProfileIdResponse;
    public DeleteMissionProfileResponse withMissionProfileIdResponse(openapisdk.models.shared.MissionProfileIdResponse missionProfileIdResponse) {
        this.missionProfileIdResponse = missionProfileIdResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteMissionProfileResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteMissionProfileResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}