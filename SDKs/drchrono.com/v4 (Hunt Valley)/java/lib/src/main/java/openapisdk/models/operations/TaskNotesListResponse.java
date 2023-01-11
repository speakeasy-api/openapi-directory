package openapisdk.models.operations;



public class TaskNotesListResponse {
    public String contentType;
    public TaskNotesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public TaskNotesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public TaskNotesList200ApplicationJson taskNotesList200ApplicationJSONObject;
    public TaskNotesListResponse withTaskNotesList200ApplicationJsonObject(TaskNotesList200ApplicationJson taskNotesList200ApplicationJSONObject) {
        this.taskNotesList200ApplicationJSONObject = taskNotesList200ApplicationJSONObject;
        return this;
    }
}