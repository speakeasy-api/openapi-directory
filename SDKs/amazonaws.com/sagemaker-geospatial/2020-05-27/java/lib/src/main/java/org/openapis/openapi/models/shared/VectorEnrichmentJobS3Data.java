/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * VectorEnrichmentJobS3Data - The Amazon S3 data for the Vector Enrichment job.
 */
public class VectorEnrichmentJobS3Data {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("KmsKeyId")
    public String kmsKeyId;

    public VectorEnrichmentJobS3Data withKmsKeyId(String kmsKeyId) {
        this.kmsKeyId = kmsKeyId;
        return this;
    }
    
    @JsonProperty("S3Uri")
    public String s3Uri;

    public VectorEnrichmentJobS3Data withS3Uri(String s3Uri) {
        this.s3Uri = s3Uri;
        return this;
    }
    
    public VectorEnrichmentJobS3Data(@JsonProperty("S3Uri") String s3Uri) {
        this.s3Uri = s3Uri;
  }
}
