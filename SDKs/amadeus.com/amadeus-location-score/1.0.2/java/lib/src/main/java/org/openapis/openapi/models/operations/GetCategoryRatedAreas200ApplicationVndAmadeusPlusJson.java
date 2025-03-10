/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetCategoryRatedAreas200ApplicationVndAmadeusPlusJson - Successful Reply
 */
public class GetCategoryRatedAreas200ApplicationVndAmadeusPlusJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public org.openapis.openapi.models.shared.CategoryRatedAreas[] data;

    public GetCategoryRatedAreas200ApplicationVndAmadeusPlusJson withData(org.openapis.openapi.models.shared.CategoryRatedAreas[] data) {
        this.data = data;
        return this;
    }
    
    /**
     * Meta information about the returned object(s) in "data"
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public org.openapis.openapi.models.shared.Meta meta;

    public GetCategoryRatedAreas200ApplicationVndAmadeusPlusJson withMeta(org.openapis.openapi.models.shared.Meta meta) {
        this.meta = meta;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("warnings")
    public org.openapis.openapi.models.shared.Warning[] warnings;

    public GetCategoryRatedAreas200ApplicationVndAmadeusPlusJson withWarnings(org.openapis.openapi.models.shared.Warning[] warnings) {
        this.warnings = warnings;
        return this;
    }
    
    public GetCategoryRatedAreas200ApplicationVndAmadeusPlusJson(){}
}
