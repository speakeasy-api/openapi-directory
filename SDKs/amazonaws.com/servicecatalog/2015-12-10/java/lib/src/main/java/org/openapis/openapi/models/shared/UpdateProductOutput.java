/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * UpdateProductOutput - Success
 */
public class UpdateProductOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ProductViewDetail")
    public ProductViewDetail productViewDetail;

    public UpdateProductOutput withProductViewDetail(ProductViewDetail productViewDetail) {
        this.productViewDetail = productViewDetail;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tags")
    public Tag[] tags;

    public UpdateProductOutput withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
    
    public UpdateProductOutput(){}
}
