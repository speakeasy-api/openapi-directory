/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PoolOriginationIdentitiesFilter - Information about origination identities associated with a pool that meets a specified criteria.
 */
public class PoolOriginationIdentitiesFilter {
    @JsonProperty("Name")
    public PoolOriginationIdentitiesFilterNameEnum name;

    public PoolOriginationIdentitiesFilter withName(PoolOriginationIdentitiesFilterNameEnum name) {
        this.name = name;
        return this;
    }
    
    @JsonProperty("Values")
    public String[] values;

    public PoolOriginationIdentitiesFilter withValues(String[] values) {
        this.values = values;
        return this;
    }
    
    public PoolOriginationIdentitiesFilter(@JsonProperty("Name") PoolOriginationIdentitiesFilterNameEnum name, @JsonProperty("Values") String[] values) {
        this.name = name;
        this.values = values;
  }
}
