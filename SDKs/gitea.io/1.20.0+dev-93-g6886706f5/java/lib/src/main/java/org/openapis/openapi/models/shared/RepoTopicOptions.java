/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * RepoTopicOptions - RepoTopicOptions a collection of repo topic names
 */
public class RepoTopicOptions {
    /**
     * list of topic names
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("topics")
    public String[] topics;
    public RepoTopicOptions withTopics(String[] topics) {
        this.topics = topics;
        return this;
    }
    
}
