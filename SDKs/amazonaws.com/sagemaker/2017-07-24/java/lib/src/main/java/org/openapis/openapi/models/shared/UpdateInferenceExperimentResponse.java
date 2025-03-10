/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * UpdateInferenceExperimentResponse - Success
 */
public class UpdateInferenceExperimentResponse {
    @JsonProperty("InferenceExperimentArn")
    public String inferenceExperimentArn;

    public UpdateInferenceExperimentResponse withInferenceExperimentArn(String inferenceExperimentArn) {
        this.inferenceExperimentArn = inferenceExperimentArn;
        return this;
    }
    
    public UpdateInferenceExperimentResponse(@JsonProperty("InferenceExperimentArn") String inferenceExperimentArn) {
        this.inferenceExperimentArn = inferenceExperimentArn;
  }
}
