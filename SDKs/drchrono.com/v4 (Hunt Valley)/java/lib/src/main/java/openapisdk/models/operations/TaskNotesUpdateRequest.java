package openapisdk.models.operations;



public class TaskNotesUpdateRequest {
    public TaskNotesUpdatePathParams pathParams;
    public TaskNotesUpdateRequest withPathParams(TaskNotesUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public TaskNotesUpdateQueryParams queryParams;
    public TaskNotesUpdateRequest withQueryParams(TaskNotesUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public TaskNotesUpdateSecurity security;
    public TaskNotesUpdateRequest withSecurity(TaskNotesUpdateSecurity security) {
        this.security = security;
        return this;
    }
}