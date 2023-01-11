package openapisdk.models.shared;



/**
 * ImportInstanceResultConversionTaskImportInstance
 * If the task is for importing an instance, this contains information about the import instance task.
**/
public class ImportInstanceResultConversionTaskImportInstance {
    public java.util.Map<String, Object> description;
    public ImportInstanceResultConversionTaskImportInstance withDescription(java.util.Map<String, Object> description) {
        this.description = description;
        return this;
    }
    public java.util.Map<String, Object> instanceId;
    public ImportInstanceResultConversionTaskImportInstance withInstanceId(java.util.Map<String, Object> instanceId) {
        this.instanceId = instanceId;
        return this;
    }
    public java.util.Map<String, Object> platform;
    public ImportInstanceResultConversionTaskImportInstance withPlatform(java.util.Map<String, Object> platform) {
        this.platform = platform;
        return this;
    }
    public java.util.Map<String, Object> volumes;
    public ImportInstanceResultConversionTaskImportInstance withVolumes(java.util.Map<String, Object> volumes) {
        this.volumes = volumes;
        return this;
    }
}