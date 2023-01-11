package openapisdk.models.operations;



public class GetSavedFilterResponse {
    public String contentType;
    public GetSavedFilterResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DefaultPayload defaultPayload;
    public GetSavedFilterResponse withDefaultPayload(openapisdk.models.shared.DefaultPayload defaultPayload) {
        this.defaultPayload = defaultPayload;
        return this;
    }
    public openapisdk.models.shared.ProjectSavedFilter projectSavedFilter;
    public GetSavedFilterResponse withProjectSavedFilter(openapisdk.models.shared.ProjectSavedFilter projectSavedFilter) {
        this.projectSavedFilter = projectSavedFilter;
        return this;
    }
    public Long statusCode;
    public GetSavedFilterResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}