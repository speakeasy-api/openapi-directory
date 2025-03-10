/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class ReposGetPunchCardStatsRequest {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=owner")
    public String owner;

    public ReposGetPunchCardStatsRequest withOwner(String owner) {
        this.owner = owner;
        return this;
    }
    
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo")
    public String repo;

    public ReposGetPunchCardStatsRequest withRepo(String repo) {
        this.repo = repo;
        return this;
    }
    
    public ReposGetPunchCardStatsRequest(@JsonProperty("owner") String owner, @JsonProperty("repo") String repo) {
        this.owner = owner;
        this.repo = repo;
  }
}
