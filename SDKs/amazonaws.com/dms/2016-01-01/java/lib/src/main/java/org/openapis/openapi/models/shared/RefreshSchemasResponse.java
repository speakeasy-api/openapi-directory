/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * RefreshSchemasResponse - &lt;p/&gt;
 */
public class RefreshSchemasResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RefreshSchemasStatus")
    public RefreshSchemasStatus refreshSchemasStatus;

    public RefreshSchemasResponse withRefreshSchemasStatus(RefreshSchemasStatus refreshSchemasStatus) {
        this.refreshSchemasStatus = refreshSchemasStatus;
        return this;
    }
    
    public RefreshSchemasResponse(){}
}
