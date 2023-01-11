package openapisdk.models.shared;



/**
 * CreateInstanceExportTaskResultExportTaskInstanceExportDetails
 * Information about the instance to export.
**/
public class CreateInstanceExportTaskResultExportTaskInstanceExportDetails {
    public java.util.Map<String, Object> instanceId;
    public CreateInstanceExportTaskResultExportTaskInstanceExportDetails withInstanceId(java.util.Map<String, Object> instanceId) {
        this.instanceId = instanceId;
        return this;
    }
    public java.util.Map<String, Object> targetEnvironment;
    public CreateInstanceExportTaskResultExportTaskInstanceExportDetails withTargetEnvironment(java.util.Map<String, Object> targetEnvironment) {
        this.targetEnvironment = targetEnvironment;
        return this;
    }
}