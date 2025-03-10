/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;



/**
 * DescribeConversionTasksResultConversionTasksImportVolume - If the task is for importing a volume, this contains information about the import volume task.
 */
public class DescribeConversionTasksResultConversionTasksImportVolume {
    
    public String availabilityZone;

    public DescribeConversionTasksResultConversionTasksImportVolume withAvailabilityZone(String availabilityZone) {
        this.availabilityZone = availabilityZone;
        return this;
    }
    
    
    public Long bytesConverted;

    public DescribeConversionTasksResultConversionTasksImportVolume withBytesConverted(Long bytesConverted) {
        this.bytesConverted = bytesConverted;
        return this;
    }
    
    
    public String description;

    public DescribeConversionTasksResultConversionTasksImportVolume withDescription(String description) {
        this.description = description;
        return this;
    }
    
    
    public DescribeConversionTasksResultConversionTasksImportVolumeImage image;

    public DescribeConversionTasksResultConversionTasksImportVolume withImage(DescribeConversionTasksResultConversionTasksImportVolumeImage image) {
        this.image = image;
        return this;
    }
    
    
    public DescribeConversionTasksResultConversionTasksImportVolumeVolume volume;

    public DescribeConversionTasksResultConversionTasksImportVolume withVolume(DescribeConversionTasksResultConversionTasksImportVolumeVolume volume) {
        this.volume = volume;
        return this;
    }
    
    public DescribeConversionTasksResultConversionTasksImportVolume(){}
}
