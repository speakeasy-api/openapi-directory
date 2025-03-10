/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ModelCardExportOutputConfig - Configure the export output details for an Amazon SageMaker Model Card.
 */
public class ModelCardExportOutputConfig {
    @JsonProperty("S3OutputPath")
    public String s3OutputPath;

    public ModelCardExportOutputConfig withS3OutputPath(String s3OutputPath) {
        this.s3OutputPath = s3OutputPath;
        return this;
    }
    
    public ModelCardExportOutputConfig(@JsonProperty("S3OutputPath") String s3OutputPath) {
        this.s3OutputPath = s3OutputPath;
  }
}
