package openapisdk.models.operations;



public class TaskNotesCreateResponse {
    public String contentType;
    public TaskNotesCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public TaskNotesCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TaskNote taskNote;
    public TaskNotesCreateResponse withTaskNote(openapisdk.models.shared.TaskNote taskNote) {
        this.taskNote = taskNote;
        return this;
    }
}