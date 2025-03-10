/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import org.openapis.openapi.utils.SpeakeasyMetadata;

public class WhoisRequest {
    /**
     * Domain
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=domain")
    public String domain;
    public WhoisRequest withDomain(String domain) {
        this.domain = domain;
        return this;
    }
    
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=format")
    public WhoisFormatEnum format;
    public WhoisRequest withFormat(WhoisFormatEnum format) {
        this.format = format;
        return this;
    }
    
}
