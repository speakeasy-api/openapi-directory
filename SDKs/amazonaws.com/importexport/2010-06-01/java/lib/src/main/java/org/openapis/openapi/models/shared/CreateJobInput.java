/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CreateJobInput - Input structure for the CreateJob operation.
 */
public class CreateJobInput {
    /**
     * Specifies the version of the client tool.
     */
    
    public String apiVersion;

    public CreateJobInput withAPIVersion(String apiVersion) {
        this.apiVersion = apiVersion;
        return this;
    }
    
    /**
     * Specifies whether the job to initiate is an import or export job.
     */
    
    public JobTypeEnum jobType;

    public CreateJobInput withJobType(JobTypeEnum jobType) {
        this.jobType = jobType;
        return this;
    }
    
    /**
     * The UTF-8 encoded text of the manifest file.
     */
    
    public String manifest;

    public CreateJobInput withManifest(String manifest) {
        this.manifest = manifest;
        return this;
    }
    
    /**
     * For internal use only.
     */
    
    public String manifestAddendum;

    public CreateJobInput withManifestAddendum(String manifestAddendum) {
        this.manifestAddendum = manifestAddendum;
        return this;
    }
    
    /**
     * Validate the manifest and parameter values in the request but do not actually create a job.
     */
    
    public Boolean validateOnly;

    public CreateJobInput withValidateOnly(Boolean validateOnly) {
        this.validateOnly = validateOnly;
        return this;
    }
    
    public CreateJobInput(@JsonProperty("JobType") JobTypeEnum jobType, @JsonProperty("Manifest") String manifest, @JsonProperty("ValidateOnly") Boolean validateOnly) {
        this.jobType = jobType;
        this.manifest = manifest;
        this.validateOnly = validateOnly;
  }
}
