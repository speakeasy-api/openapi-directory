package openapisdk.models.operations;



public class ListMissionProfilesResponse {
    public String contentType;
    public ListMissionProfilesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object dependencyException;
    public ListMissionProfilesResponse withDependencyException(Object dependencyException) {
        this.dependencyException = dependencyException;
        return this;
    }
    public Object invalidParameterException;
    public ListMissionProfilesResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public openapisdk.models.shared.ListMissionProfilesResponse listMissionProfilesResponse;
    public ListMissionProfilesResponse withListMissionProfilesResponse(openapisdk.models.shared.ListMissionProfilesResponse listMissionProfilesResponse) {
        this.listMissionProfilesResponse = listMissionProfilesResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public ListMissionProfilesResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ListMissionProfilesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}