package openapisdk.models.operations;



public class TaskNotesReadRequest {
    public TaskNotesReadPathParams pathParams;
    public TaskNotesReadRequest withPathParams(TaskNotesReadPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public TaskNotesReadQueryParams queryParams;
    public TaskNotesReadRequest withQueryParams(TaskNotesReadQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public TaskNotesReadSecurity security;
    public TaskNotesReadRequest withSecurity(TaskNotesReadSecurity security) {
        this.security = security;
        return this;
    }
}