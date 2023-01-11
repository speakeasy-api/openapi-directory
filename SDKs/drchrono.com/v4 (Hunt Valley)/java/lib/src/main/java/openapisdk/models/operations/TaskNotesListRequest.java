package openapisdk.models.operations;



public class TaskNotesListRequest {
    public TaskNotesListQueryParams queryParams;
    public TaskNotesListRequest withQueryParams(TaskNotesListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public TaskNotesListSecurity security;
    public TaskNotesListRequest withSecurity(TaskNotesListSecurity security) {
        this.security = security;
        return this;
    }
}