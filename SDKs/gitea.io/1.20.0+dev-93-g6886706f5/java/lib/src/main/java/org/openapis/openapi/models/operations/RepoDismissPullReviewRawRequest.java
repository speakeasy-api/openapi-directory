/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import org.openapis.openapi.utils.SpeakeasyMetadata;

public class RepoDismissPullReviewRawRequest {
    @SpeakeasyMetadata("request:mediaType=text/plain")
    public byte[] requestBody;
    public RepoDismissPullReviewRawRequest withRequestBody(byte[] requestBody) {
        this.requestBody = requestBody;
        return this;
    }
    
    /**
     * id of the review
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public RepoDismissPullReviewRawRequest withId(Long id) {
        this.id = id;
        return this;
    }
    
    /**
     * index of the pull request
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=index")
    public Long index;
    public RepoDismissPullReviewRawRequest withIndex(Long index) {
        this.index = index;
        return this;
    }
    
    /**
     * owner of the repo
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=owner")
    public String owner;
    public RepoDismissPullReviewRawRequest withOwner(String owner) {
        this.owner = owner;
        return this;
    }
    
    /**
     * name of the repo
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo")
    public String repo;
    public RepoDismissPullReviewRawRequest withRepo(String repo) {
        this.repo = repo;
        return this;
    }
    
}
