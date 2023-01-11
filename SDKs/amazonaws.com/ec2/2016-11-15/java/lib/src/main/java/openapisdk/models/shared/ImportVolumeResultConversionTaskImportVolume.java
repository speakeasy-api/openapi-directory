package openapisdk.models.shared;



/**
 * ImportVolumeResultConversionTaskImportVolume
 * If the task is for importing a volume, this contains information about the import volume task.
**/
public class ImportVolumeResultConversionTaskImportVolume {
    public java.util.Map<String, Object> availabilityZone;
    public ImportVolumeResultConversionTaskImportVolume withAvailabilityZone(java.util.Map<String, Object> availabilityZone) {
        this.availabilityZone = availabilityZone;
        return this;
    }
    public java.util.Map<String, Object> bytesConverted;
    public ImportVolumeResultConversionTaskImportVolume withBytesConverted(java.util.Map<String, Object> bytesConverted) {
        this.bytesConverted = bytesConverted;
        return this;
    }
    public java.util.Map<String, Object> description;
    public ImportVolumeResultConversionTaskImportVolume withDescription(java.util.Map<String, Object> description) {
        this.description = description;
        return this;
    }
    public ImportVolumeResultConversionTaskImportVolumeImage image;
    public ImportVolumeResultConversionTaskImportVolume withImage(ImportVolumeResultConversionTaskImportVolumeImage image) {
        this.image = image;
        return this;
    }
    public ImportVolumeResultConversionTaskImportVolumeVolume volume;
    public ImportVolumeResultConversionTaskImportVolume withVolume(ImportVolumeResultConversionTaskImportVolumeVolume volume) {
        this.volume = volume;
        return this;
    }
}