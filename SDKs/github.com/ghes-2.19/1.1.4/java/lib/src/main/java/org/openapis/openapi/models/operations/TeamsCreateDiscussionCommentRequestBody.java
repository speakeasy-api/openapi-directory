/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class TeamsCreateDiscussionCommentRequestBody {
    /**
     * The discussion comment's body text.
     */
    @JsonProperty("body")
    public String body;

    public TeamsCreateDiscussionCommentRequestBody withBody(String body) {
        this.body = body;
        return this;
    }
    
    public TeamsCreateDiscussionCommentRequestBody(@JsonProperty("body") String body) {
        this.body = body;
  }
}
