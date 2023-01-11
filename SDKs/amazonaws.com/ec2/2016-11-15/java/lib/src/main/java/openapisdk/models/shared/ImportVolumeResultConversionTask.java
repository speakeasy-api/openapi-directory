package openapisdk.models.shared;



/**
 * ImportVolumeResultConversionTask
 * Information about the conversion task.
**/
public class ImportVolumeResultConversionTask {
    public java.util.Map<String, Object> conversionTaskId;
    public ImportVolumeResultConversionTask withConversionTaskId(java.util.Map<String, Object> conversionTaskId) {
        this.conversionTaskId = conversionTaskId;
        return this;
    }
    public java.util.Map<String, Object> expirationTime;
    public ImportVolumeResultConversionTask withExpirationTime(java.util.Map<String, Object> expirationTime) {
        this.expirationTime = expirationTime;
        return this;
    }
    public ImportVolumeResultConversionTaskImportInstance importInstance;
    public ImportVolumeResultConversionTask withImportInstance(ImportVolumeResultConversionTaskImportInstance importInstance) {
        this.importInstance = importInstance;
        return this;
    }
    public ImportVolumeResultConversionTaskImportVolume importVolume;
    public ImportVolumeResultConversionTask withImportVolume(ImportVolumeResultConversionTaskImportVolume importVolume) {
        this.importVolume = importVolume;
        return this;
    }
    public java.util.Map<String, Object> state;
    public ImportVolumeResultConversionTask withState(java.util.Map<String, Object> state) {
        this.state = state;
        return this;
    }
    public java.util.Map<String, Object> statusMessage;
    public ImportVolumeResultConversionTask withStatusMessage(java.util.Map<String, Object> statusMessage) {
        this.statusMessage = statusMessage;
        return this;
    }
    public java.util.Map<String, Object> tags;
    public ImportVolumeResultConversionTask withTags(java.util.Map<String, Object> tags) {
        this.tags = tags;
        return this;
    }
}