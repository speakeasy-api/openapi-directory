/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ExportECSServiceRecommendationsResponse - Success
 */
public class ExportECSServiceRecommendationsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jobId")
    public String jobId;

    public ExportECSServiceRecommendationsResponse withJobId(String jobId) {
        this.jobId = jobId;
        return this;
    }
    
    /**
     * Describes the destination Amazon Simple Storage Service (Amazon S3) bucket name and object keys of a recommendations export file, and its associated metadata file.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("s3Destination")
    public S3Destination s3Destination;

    public ExportECSServiceRecommendationsResponse withS3Destination(S3Destination s3Destination) {
        this.s3Destination = s3Destination;
        return this;
    }
    
    public ExportECSServiceRecommendationsResponse(){}
}
