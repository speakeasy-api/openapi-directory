/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ListSqlInjectionMatchSetsRequest - A request to list the &lt;a&gt;SqlInjectionMatchSet&lt;/a&gt; objects created by the current AWS account.
 */
public class ListSqlInjectionMatchSetsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Limit")
    public Long limit;

    public ListSqlInjectionMatchSetsRequest withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextMarker")
    public String nextMarker;

    public ListSqlInjectionMatchSetsRequest withNextMarker(String nextMarker) {
        this.nextMarker = nextMarker;
        return this;
    }
    
    public ListSqlInjectionMatchSetsRequest(){}
}
