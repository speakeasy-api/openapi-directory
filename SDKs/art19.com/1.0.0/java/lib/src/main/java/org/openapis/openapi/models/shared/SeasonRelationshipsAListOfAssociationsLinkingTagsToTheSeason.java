/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

public class SeasonRelationshipsAListOfAssociationsLinkingTagsToTheSeason {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public ResourceIdentifier[] data;

    public SeasonRelationshipsAListOfAssociationsLinkingTagsToTheSeason withData(ResourceIdentifier[] data) {
        this.data = data;
        return this;
    }
    
    public SeasonRelationshipsAListOfAssociationsLinkingTagsToTheSeason(){}
}
