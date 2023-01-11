package openapisdk.models.operations;



public class GetMissionProfileResponse {
    public String contentType;
    public GetMissionProfileResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object dependencyException;
    public GetMissionProfileResponse withDependencyException(Object dependencyException) {
        this.dependencyException = dependencyException;
        return this;
    }
    public openapisdk.models.shared.GetMissionProfileResponse getMissionProfileResponse;
    public GetMissionProfileResponse withGetMissionProfileResponse(openapisdk.models.shared.GetMissionProfileResponse getMissionProfileResponse) {
        this.getMissionProfileResponse = getMissionProfileResponse;
        return this;
    }
    public Object invalidParameterException;
    public GetMissionProfileResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetMissionProfileResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetMissionProfileResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}