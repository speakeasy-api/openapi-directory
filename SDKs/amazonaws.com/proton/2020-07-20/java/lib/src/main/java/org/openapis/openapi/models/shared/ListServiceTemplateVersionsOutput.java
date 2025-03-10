/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ListServiceTemplateVersionsOutput - Success
 */
public class ListServiceTemplateVersionsOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;

    public ListServiceTemplateVersionsOutput withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    
    @JsonProperty("templateVersions")
    public ServiceTemplateVersionSummary[] templateVersions;

    public ListServiceTemplateVersionsOutput withTemplateVersions(ServiceTemplateVersionSummary[] templateVersions) {
        this.templateVersions = templateVersions;
        return this;
    }
    
    public ListServiceTemplateVersionsOutput(@JsonProperty("templateVersions") ServiceTemplateVersionSummary[] templateVersions) {
        this.templateVersions = templateVersions;
  }
}
