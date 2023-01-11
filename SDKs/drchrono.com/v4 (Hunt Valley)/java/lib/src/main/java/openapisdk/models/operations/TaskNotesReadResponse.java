package openapisdk.models.operations;



public class TaskNotesReadResponse {
    public String contentType;
    public TaskNotesReadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public TaskNotesReadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TaskNote taskNote;
    public TaskNotesReadResponse withTaskNote(openapisdk.models.shared.TaskNote taskNote) {
        this.taskNote = taskNote;
        return this;
    }
}