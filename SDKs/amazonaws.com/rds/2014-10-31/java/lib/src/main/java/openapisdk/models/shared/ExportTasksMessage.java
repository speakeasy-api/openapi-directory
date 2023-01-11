package openapisdk.models.shared;



public class ExportTasksMessage {
    public ExportTasksList[] exportTasks;
    public ExportTasksMessage withExportTasks(ExportTasksList[] exportTasks) {
        this.exportTasks = exportTasks;
        return this;
    }
    public String marker;
    public ExportTasksMessage withMarker(String marker) {
        this.marker = marker;
        return this;
    }
}