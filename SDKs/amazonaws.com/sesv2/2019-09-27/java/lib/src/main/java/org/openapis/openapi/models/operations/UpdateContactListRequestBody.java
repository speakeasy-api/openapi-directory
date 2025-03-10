/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateContactListRequestBody {
    /**
     * A description of what the contact list is about.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;

    public UpdateContactListRequestBody withDescription(String description) {
        this.description = description;
        return this;
    }
    
    /**
     * An interest group, theme, or label within a list. A contact list can have multiple topics.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Topics")
    public org.openapis.openapi.models.shared.Topic[] topics;

    public UpdateContactListRequestBody withTopics(org.openapis.openapi.models.shared.Topic[] topics) {
        this.topics = topics;
        return this;
    }
    
    public UpdateContactListRequestBody(){}
}
