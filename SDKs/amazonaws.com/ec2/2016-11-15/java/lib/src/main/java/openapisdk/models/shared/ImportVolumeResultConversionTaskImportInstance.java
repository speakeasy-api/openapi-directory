package openapisdk.models.shared;



/**
 * ImportVolumeResultConversionTaskImportInstance
 * If the task is for importing an instance, this contains information about the import instance task.
**/
public class ImportVolumeResultConversionTaskImportInstance {
    public java.util.Map<String, Object> description;
    public ImportVolumeResultConversionTaskImportInstance withDescription(java.util.Map<String, Object> description) {
        this.description = description;
        return this;
    }
    public java.util.Map<String, Object> instanceId;
    public ImportVolumeResultConversionTaskImportInstance withInstanceId(java.util.Map<String, Object> instanceId) {
        this.instanceId = instanceId;
        return this;
    }
    public java.util.Map<String, Object> platform;
    public ImportVolumeResultConversionTaskImportInstance withPlatform(java.util.Map<String, Object> platform) {
        this.platform = platform;
        return this;
    }
    public java.util.Map<String, Object> volumes;
    public ImportVolumeResultConversionTaskImportInstance withVolumes(java.util.Map<String, Object> volumes) {
        this.volumes = volumes;
        return this;
    }
}