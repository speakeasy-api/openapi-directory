/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeDBParametersMessage {
    
    public String dbParameterGroupName;

    public DescribeDBParametersMessage withDBParameterGroupName(String dbParameterGroupName) {
        this.dbParameterGroupName = dbParameterGroupName;
        return this;
    }
    
    
    public FilterList[] filters;

    public DescribeDBParametersMessage withFilters(FilterList[] filters) {
        this.filters = filters;
        return this;
    }
    
    
    public String marker;

    public DescribeDBParametersMessage withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    
    
    public Long maxRecords;

    public DescribeDBParametersMessage withMaxRecords(Long maxRecords) {
        this.maxRecords = maxRecords;
        return this;
    }
    
    
    public String source;

    public DescribeDBParametersMessage withSource(String source) {
        this.source = source;
        return this;
    }
    
    public DescribeDBParametersMessage(@JsonProperty("DBParameterGroupName") String dbParameterGroupName) {
        this.dbParameterGroupName = dbParameterGroupName;
  }
}
