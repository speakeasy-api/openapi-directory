/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import org.openapis.openapi.utils.SpeakeasyMetadata;

public class DomainRankRequest {
    /**
     * Domain
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=domain")
    public String domain;
    public DomainRankRequest withDomain(String domain) {
        this.domain = domain;
        return this;
    }
    
}
