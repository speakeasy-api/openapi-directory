/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import org.openapis.openapi.utils.SpeakeasyMetadata;

public class RemoveSystemRescueKeyPairRequest {
    /**
     * Authentication token
     */
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Sds-Auth-Token")
    public String xSdsAuthToken;
    public RemoveSystemRescueKeyPairRequest withXSdsAuthToken(String xSdsAuthToken) {
        this.xSdsAuthToken = xSdsAuthToken;
        return this;
    }
    
    /**
     * Version (NEW)
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=version")
    public String version;
    public RemoveSystemRescueKeyPairRequest withVersion(String version) {
        this.version = version;
        return this;
    }
    
}
