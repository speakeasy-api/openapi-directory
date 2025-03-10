/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;



/**
 * DestinyResponsesDestinyVendorResponseVendor - The base properties of the vendor.
 * COMPONENT TYPE: Vendors
 */
public class DestinyResponsesDestinyVendorResponseVendor {
    /**
     * This component contains essential/summary information about the vendor.
     */
    
    public DestinyEntitiesVendorsDestinyVendorComponent data;

    public DestinyResponsesDestinyVendorResponseVendor withData(DestinyEntitiesVendorsDestinyVendorComponent data) {
        this.data = data;
        return this;
    }
    
    /**
     * If true, this component is disabled.
     */
    
    public Boolean disabled;

    public DestinyResponsesDestinyVendorResponseVendor withDisabled(Boolean disabled) {
        this.disabled = disabled;
        return this;
    }
    
    
    public Integer privacy;

    public DestinyResponsesDestinyVendorResponseVendor withPrivacy(Integer privacy) {
        this.privacy = privacy;
        return this;
    }
    
    public DestinyResponsesDestinyVendorResponseVendor(){}
}
