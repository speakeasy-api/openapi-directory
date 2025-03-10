/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;



public class ListMFADevicesRequest {
    
    public String marker;

    public ListMFADevicesRequest withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    
    
    public Long maxItems;

    public ListMFADevicesRequest withMaxItems(Long maxItems) {
        this.maxItems = maxItems;
        return this;
    }
    
    
    public String userName;

    public ListMFADevicesRequest withUserName(String userName) {
        this.userName = userName;
        return this;
    }
    
    public ListMFADevicesRequest(){}
}
