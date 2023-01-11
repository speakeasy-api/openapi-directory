package openapisdk.models.operations;



public class GetHookEventsSubjectTypeResponse {
    public String contentType;
    public GetHookEventsSubjectTypeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetHookEventsSubjectTypeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> error;
    public GetHookEventsSubjectTypeResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.PaginatedHookEvents paginatedHookEvents;
    public GetHookEventsSubjectTypeResponse withPaginatedHookEvents(openapisdk.models.shared.PaginatedHookEvents paginatedHookEvents) {
        this.paginatedHookEvents = paginatedHookEvents;
        return this;
    }
}