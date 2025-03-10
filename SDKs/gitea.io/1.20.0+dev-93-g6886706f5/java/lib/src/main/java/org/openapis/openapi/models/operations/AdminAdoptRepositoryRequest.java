/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import org.openapis.openapi.utils.SpeakeasyMetadata;

public class AdminAdoptRepositoryRequest {
    /**
     * owner of the repo
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=owner")
    public String owner;
    public AdminAdoptRepositoryRequest withOwner(String owner) {
        this.owner = owner;
        return this;
    }
    
    /**
     * name of the repo
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo")
    public String repo;
    public AdminAdoptRepositoryRequest withRepo(String repo) {
        this.repo = repo;
        return this;
    }
    
}
