/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DescribeJobResult - Success
 */
public class DescribeJobResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("JobMetadata")
    public JobMetadata jobMetadata;

    public DescribeJobResult withJobMetadata(JobMetadata jobMetadata) {
        this.jobMetadata = jobMetadata;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SubJobMetadata")
    public JobMetadata[] subJobMetadata;

    public DescribeJobResult withSubJobMetadata(JobMetadata[] subJobMetadata) {
        this.subJobMetadata = subJobMetadata;
        return this;
    }
    
    public DescribeJobResult(){}
}
