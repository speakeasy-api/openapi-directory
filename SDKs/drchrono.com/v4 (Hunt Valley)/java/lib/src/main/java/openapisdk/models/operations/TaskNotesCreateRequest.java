package openapisdk.models.operations;



public class TaskNotesCreateRequest {
    public TaskNotesCreateQueryParams queryParams;
    public TaskNotesCreateRequest withQueryParams(TaskNotesCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public TaskNotesCreateSecurity security;
    public TaskNotesCreateRequest withSecurity(TaskNotesCreateSecurity security) {
        this.security = security;
        return this;
    }
}