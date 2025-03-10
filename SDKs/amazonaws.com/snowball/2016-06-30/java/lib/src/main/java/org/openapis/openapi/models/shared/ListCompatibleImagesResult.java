/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ListCompatibleImagesResult - Success
 */
public class ListCompatibleImagesResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CompatibleImages")
    public CompatibleImage[] compatibleImages;

    public ListCompatibleImagesResult withCompatibleImages(CompatibleImage[] compatibleImages) {
        this.compatibleImages = compatibleImages;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;

    public ListCompatibleImagesResult withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    
    public ListCompatibleImagesResult(){}
}
