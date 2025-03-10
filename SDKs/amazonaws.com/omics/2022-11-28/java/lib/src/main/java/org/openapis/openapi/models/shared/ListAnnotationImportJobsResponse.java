/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ListAnnotationImportJobsResponse - Success
 */
public class ListAnnotationImportJobsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("annotationImportJobs")
    public AnnotationImportJobItem[] annotationImportJobs;

    public ListAnnotationImportJobsResponse withAnnotationImportJobs(AnnotationImportJobItem[] annotationImportJobs) {
        this.annotationImportJobs = annotationImportJobs;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;

    public ListAnnotationImportJobsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    
    public ListAnnotationImportJobsResponse(){}
}
