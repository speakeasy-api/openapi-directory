package openapisdk.models.operations;



public class GetHookEventsResponse {
    public String contentType;
    public GetHookEventsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetHookEventsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.SubjectTypes subjectTypes;
    public GetHookEventsResponse withSubjectTypes(openapisdk.models.shared.SubjectTypes subjectTypes) {
        this.subjectTypes = subjectTypes;
        return this;
    }
}