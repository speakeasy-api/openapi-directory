/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CreateVirtualServiceOutput - &lt;zonbook&gt;&lt;/zonbook&gt;&lt;xhtml&gt;&lt;/xhtml&gt;
 */
public class CreateVirtualServiceOutput {
    @JsonProperty("virtualService")
    public VirtualServiceData virtualService;

    public CreateVirtualServiceOutput withVirtualService(VirtualServiceData virtualService) {
        this.virtualService = virtualService;
        return this;
    }
    
    public CreateVirtualServiceOutput(@JsonProperty("virtualService") VirtualServiceData virtualService) {
        this.virtualService = virtualService;
  }
}
