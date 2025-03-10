/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ExportVectorEnrichmentJobOutputConfig - An object containing information about the output file.
 */
public class ExportVectorEnrichmentJobOutputConfig {
    @JsonProperty("S3Data")
    public VectorEnrichmentJobS3Data s3Data;

    public ExportVectorEnrichmentJobOutputConfig withS3Data(VectorEnrichmentJobS3Data s3Data) {
        this.s3Data = s3Data;
        return this;
    }
    
    public ExportVectorEnrichmentJobOutputConfig(@JsonProperty("S3Data") VectorEnrichmentJobS3Data s3Data) {
        this.s3Data = s3Data;
  }
}
