/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ModelPackageValidationSpecification - Specifies batch transform jobs that SageMaker runs to validate your model package.
 */
public class ModelPackageValidationSpecification {
    @JsonProperty("ValidationProfiles")
    public ModelPackageValidationProfile[] validationProfiles;

    public ModelPackageValidationSpecification withValidationProfiles(ModelPackageValidationProfile[] validationProfiles) {
        this.validationProfiles = validationProfiles;
        return this;
    }
    
    @JsonProperty("ValidationRole")
    public String validationRole;

    public ModelPackageValidationSpecification withValidationRole(String validationRole) {
        this.validationRole = validationRole;
        return this;
    }
    
    public ModelPackageValidationSpecification(@JsonProperty("ValidationProfiles") ModelPackageValidationProfile[] validationProfiles, @JsonProperty("ValidationRole") String validationRole) {
        this.validationProfiles = validationProfiles;
        this.validationRole = validationRole;
  }
}
