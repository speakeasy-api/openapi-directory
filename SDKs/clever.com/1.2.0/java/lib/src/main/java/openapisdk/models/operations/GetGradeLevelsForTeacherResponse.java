package openapisdk.models.operations;



public class GetGradeLevelsForTeacherResponse {
    public String contentType;
    public GetGradeLevelsForTeacherResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GradeLevelsResponse gradeLevelsResponse;
    public GetGradeLevelsForTeacherResponse withGradeLevelsResponse(openapisdk.models.shared.GradeLevelsResponse gradeLevelsResponse) {
        this.gradeLevelsResponse = gradeLevelsResponse;
        return this;
    }
    public openapisdk.models.shared.NotFound notFound;
    public GetGradeLevelsForTeacherResponse withNotFound(openapisdk.models.shared.NotFound notFound) {
        this.notFound = notFound;
        return this;
    }
    public Long statusCode;
    public GetGradeLevelsForTeacherResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}