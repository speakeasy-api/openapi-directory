/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

public class GetSampleDataRequestBody {
    /**
     * Contains information about the source configuration in Amazon S3.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("S3SourceConfig")
    public GetSampleDataRequestBodyS3SourceConfig s3SourceConfig;

    public GetSampleDataRequestBody withS3SourceConfig(GetSampleDataRequestBodyS3SourceConfig s3SourceConfig) {
        this.s3SourceConfig = s3SourceConfig;
        return this;
    }
    
    public GetSampleDataRequestBody(){}
}
