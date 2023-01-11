package openapisdk.models.shared;



/**
 * ImportInstanceResultConversionTaskImportVolume
 * If the task is for importing a volume, this contains information about the import volume task.
**/
public class ImportInstanceResultConversionTaskImportVolume {
    public java.util.Map<String, Object> availabilityZone;
    public ImportInstanceResultConversionTaskImportVolume withAvailabilityZone(java.util.Map<String, Object> availabilityZone) {
        this.availabilityZone = availabilityZone;
        return this;
    }
    public java.util.Map<String, Object> bytesConverted;
    public ImportInstanceResultConversionTaskImportVolume withBytesConverted(java.util.Map<String, Object> bytesConverted) {
        this.bytesConverted = bytesConverted;
        return this;
    }
    public java.util.Map<String, Object> description;
    public ImportInstanceResultConversionTaskImportVolume withDescription(java.util.Map<String, Object> description) {
        this.description = description;
        return this;
    }
    public ImportInstanceResultConversionTaskImportVolumeImage image;
    public ImportInstanceResultConversionTaskImportVolume withImage(ImportInstanceResultConversionTaskImportVolumeImage image) {
        this.image = image;
        return this;
    }
    public ImportInstanceResultConversionTaskImportVolumeVolume volume;
    public ImportInstanceResultConversionTaskImportVolume withVolume(ImportInstanceResultConversionTaskImportVolumeVolume volume) {
        this.volume = volume;
        return this;
    }
}