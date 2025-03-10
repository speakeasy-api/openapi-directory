/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class ChecksListAnnotationsRequest {
    /**
     * check_run_id parameter
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=check_run_id")
    public Long checkRunId;

    public ChecksListAnnotationsRequest withCheckRunId(Long checkRunId) {
        this.checkRunId = checkRunId;
        return this;
    }
    
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=owner")
    public String owner;

    public ChecksListAnnotationsRequest withOwner(String owner) {
        this.owner = owner;
        return this;
    }
    
    /**
     * Page number of the results to fetch.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;

    public ChecksListAnnotationsRequest withPage(Long page) {
        this.page = page;
        return this;
    }
    
    /**
     * Results per page (max 100)
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Long perPage;

    public ChecksListAnnotationsRequest withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
    
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo")
    public String repo;

    public ChecksListAnnotationsRequest withRepo(String repo) {
        this.repo = repo;
        return this;
    }
    
    public ChecksListAnnotationsRequest(@JsonProperty("check_run_id") Long checkRunId, @JsonProperty("owner") String owner, @JsonProperty("repo") String repo) {
        this.checkRunId = checkRunId;
        this.owner = owner;
        this.repo = repo;
  }
}
