/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * UpdateCallAnalyticsCategoryResponse - Success
 */
public class UpdateCallAnalyticsCategoryResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CategoryProperties")
    public CategoryProperties categoryProperties;

    public UpdateCallAnalyticsCategoryResponse withCategoryProperties(CategoryProperties categoryProperties) {
        this.categoryProperties = categoryProperties;
        return this;
    }
    
    public UpdateCallAnalyticsCategoryResponse(){}
}
