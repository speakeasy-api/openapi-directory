/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ReactionsCreateForTeamDiscussionCommentRequestBody {
    /**
     * The [reaction type](https://docs.github.com/enterprise-server@2.20/rest/reference/reactions#reaction-types) to add to the team discussion comment.
     */
    @JsonProperty("content")
    public ReactionsCreateForTeamDiscussionCommentRequestBodyContentEnum content;

    public ReactionsCreateForTeamDiscussionCommentRequestBody withContent(ReactionsCreateForTeamDiscussionCommentRequestBodyContentEnum content) {
        this.content = content;
        return this;
    }
    
    public ReactionsCreateForTeamDiscussionCommentRequestBody(@JsonProperty("content") ReactionsCreateForTeamDiscussionCommentRequestBodyContentEnum content) {
        this.content = content;
  }
}
