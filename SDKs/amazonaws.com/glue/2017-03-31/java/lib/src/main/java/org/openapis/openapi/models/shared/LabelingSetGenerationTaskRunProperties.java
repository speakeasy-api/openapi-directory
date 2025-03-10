/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * LabelingSetGenerationTaskRunProperties - Specifies configuration properties for a labeling set generation task run.
 */
public class LabelingSetGenerationTaskRunProperties {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OutputS3Path")
    public String outputS3Path;

    public LabelingSetGenerationTaskRunProperties withOutputS3Path(String outputS3Path) {
        this.outputS3Path = outputS3Path;
        return this;
    }
    
    public LabelingSetGenerationTaskRunProperties(){}
}
