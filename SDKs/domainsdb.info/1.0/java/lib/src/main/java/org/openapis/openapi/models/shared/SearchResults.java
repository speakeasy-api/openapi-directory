/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * SearchResults - Success
 */
public class SearchResults {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("domains")
    public Domains[] domains;

    public SearchResults withDomains(Domains[] domains) {
        this.domains = domains;
        return this;
    }
    
    /**
     * Next page id
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("next_page")
    public String nextPage;

    public SearchResults withNextPage(String nextPage) {
        this.nextPage = nextPage;
        return this;
    }
    
    /**
     * Time took
     */
    @JsonProperty("time")
    public String time;

    public SearchResults withTime(String time) {
        this.time = time;
        return this;
    }
    
    /**
     * Total days reported
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total")
    public Long total;

    public SearchResults withTotal(Long total) {
        this.total = total;
        return this;
    }
    
    public SearchResults(@JsonProperty("time") String time) {
        this.time = time;
  }
}
