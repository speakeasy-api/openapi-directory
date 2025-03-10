/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;



/**
 * RevokeSecurityGroupEgressRequestIpPermissionsIpRanges - Describes an IPv4 range.
 */
public class RevokeSecurityGroupEgressRequestIpPermissionsIpRanges {
    
    public String cidrIp;

    public RevokeSecurityGroupEgressRequestIpPermissionsIpRanges withCidrIp(String cidrIp) {
        this.cidrIp = cidrIp;
        return this;
    }
    
    
    public String description;

    public RevokeSecurityGroupEgressRequestIpPermissionsIpRanges withDescription(String description) {
        this.description = description;
        return this;
    }
    
    public RevokeSecurityGroupEgressRequestIpPermissionsIpRanges(){}
}
