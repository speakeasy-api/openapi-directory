package openapisdk.models.shared;



/**
 * CreateInstanceExportTaskResultExportTask
 * Information about the export instance task.
**/
public class CreateInstanceExportTaskResultExportTask {
    public java.util.Map<String, Object> description;
    public CreateInstanceExportTaskResultExportTask withDescription(java.util.Map<String, Object> description) {
        this.description = description;
        return this;
    }
    public java.util.Map<String, Object> exportTaskId;
    public CreateInstanceExportTaskResultExportTask withExportTaskId(java.util.Map<String, Object> exportTaskId) {
        this.exportTaskId = exportTaskId;
        return this;
    }
    public CreateInstanceExportTaskResultExportTaskExportToS3Task exportToS3Task;
    public CreateInstanceExportTaskResultExportTask withExportToS3Task(CreateInstanceExportTaskResultExportTaskExportToS3Task exportToS3Task) {
        this.exportToS3Task = exportToS3Task;
        return this;
    }
    public CreateInstanceExportTaskResultExportTaskInstanceExportDetails instanceExportDetails;
    public CreateInstanceExportTaskResultExportTask withInstanceExportDetails(CreateInstanceExportTaskResultExportTaskInstanceExportDetails instanceExportDetails) {
        this.instanceExportDetails = instanceExportDetails;
        return this;
    }
    public java.util.Map<String, Object> state;
    public CreateInstanceExportTaskResultExportTask withState(java.util.Map<String, Object> state) {
        this.state = state;
        return this;
    }
    public java.util.Map<String, Object> statusMessage;
    public CreateInstanceExportTaskResultExportTask withStatusMessage(java.util.Map<String, Object> statusMessage) {
        this.statusMessage = statusMessage;
        return this;
    }
    public java.util.Map<String, Object> tags;
    public CreateInstanceExportTaskResultExportTask withTags(java.util.Map<String, Object> tags) {
        this.tags = tags;
        return this;
    }
}