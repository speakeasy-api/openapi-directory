/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import org.openapis.openapi.utils.SpeakeasyMetadata;

public class AddFavoriteRequest {
    /**
     * Authentication token
     */
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Sds-Auth-Token")
    public String xSdsAuthToken;
    public AddFavoriteRequest withXSdsAuthToken(String xSdsAuthToken) {
        this.xSdsAuthToken = xSdsAuthToken;
        return this;
    }
    
    /**
     * Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) &amp; [leettime.de](http://leettime.de/))
     */
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Sds-Date-Format")
    public AddFavoriteXSdsDateFormatEnum xSdsDateFormat;
    public AddFavoriteRequest withXSdsDateFormat(AddFavoriteXSdsDateFormatEnum xSdsDateFormat) {
        this.xSdsDateFormat = xSdsDateFormat;
        return this;
    }
    
    /**
     * Node ID
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=node_id")
    public Long nodeId;
    public AddFavoriteRequest withNodeId(Long nodeId) {
        this.nodeId = nodeId;
        return this;
    }
    
}
