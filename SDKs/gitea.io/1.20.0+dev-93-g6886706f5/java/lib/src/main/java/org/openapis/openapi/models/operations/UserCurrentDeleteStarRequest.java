/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import org.openapis.openapi.utils.SpeakeasyMetadata;

public class UserCurrentDeleteStarRequest {
    /**
     * owner of the repo to unstar
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=owner")
    public String owner;
    public UserCurrentDeleteStarRequest withOwner(String owner) {
        this.owner = owner;
        return this;
    }
    
    /**
     * name of the repo to unstar
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo")
    public String repo;
    public UserCurrentDeleteStarRequest withRepo(String repo) {
        this.repo = repo;
        return this;
    }
    
}
