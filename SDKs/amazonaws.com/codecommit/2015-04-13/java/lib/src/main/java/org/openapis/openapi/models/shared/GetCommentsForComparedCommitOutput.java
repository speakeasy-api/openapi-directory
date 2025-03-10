/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetCommentsForComparedCommitOutput - Success
 */
public class GetCommentsForComparedCommitOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("commentsForComparedCommitData")
    public CommentsForComparedCommit[] commentsForComparedCommitData;

    public GetCommentsForComparedCommitOutput withCommentsForComparedCommitData(CommentsForComparedCommit[] commentsForComparedCommitData) {
        this.commentsForComparedCommitData = commentsForComparedCommitData;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;

    public GetCommentsForComparedCommitOutput withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    
    public GetCommentsForComparedCommitOutput(){}
}
