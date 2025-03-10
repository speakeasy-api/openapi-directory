/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

public class WindowsHosting {
    /**
     * Domain name for the Windows hosting account.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("domain_name")
    public String domainName;

    public WindowsHosting withDomainName(String domainName) {
        this.domainName = domainName;
        return this;
    }
    
    /**
     * Id of Windows hosting service package.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("servicepack_id")
    public Integer servicepackId;

    public WindowsHosting withServicepackId(Integer servicepackId) {
        this.servicepackId = servicepackId;
        return this;
    }
    
    public WindowsHosting(){}
}
