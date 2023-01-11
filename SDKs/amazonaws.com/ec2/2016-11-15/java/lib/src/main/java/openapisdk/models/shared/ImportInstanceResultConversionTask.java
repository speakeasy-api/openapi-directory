package openapisdk.models.shared;



/**
 * ImportInstanceResultConversionTask
 * Information about the conversion task.
**/
public class ImportInstanceResultConversionTask {
    public java.util.Map<String, Object> conversionTaskId;
    public ImportInstanceResultConversionTask withConversionTaskId(java.util.Map<String, Object> conversionTaskId) {
        this.conversionTaskId = conversionTaskId;
        return this;
    }
    public java.util.Map<String, Object> expirationTime;
    public ImportInstanceResultConversionTask withExpirationTime(java.util.Map<String, Object> expirationTime) {
        this.expirationTime = expirationTime;
        return this;
    }
    public ImportInstanceResultConversionTaskImportInstance importInstance;
    public ImportInstanceResultConversionTask withImportInstance(ImportInstanceResultConversionTaskImportInstance importInstance) {
        this.importInstance = importInstance;
        return this;
    }
    public ImportInstanceResultConversionTaskImportVolume importVolume;
    public ImportInstanceResultConversionTask withImportVolume(ImportInstanceResultConversionTaskImportVolume importVolume) {
        this.importVolume = importVolume;
        return this;
    }
    public java.util.Map<String, Object> state;
    public ImportInstanceResultConversionTask withState(java.util.Map<String, Object> state) {
        this.state = state;
        return this;
    }
    public java.util.Map<String, Object> statusMessage;
    public ImportInstanceResultConversionTask withStatusMessage(java.util.Map<String, Object> statusMessage) {
        this.statusMessage = statusMessage;
        return this;
    }
    public java.util.Map<String, Object> tags;
    public ImportInstanceResultConversionTask withTags(java.util.Map<String, Object> tags) {
        this.tags = tags;
        return this;
    }
}