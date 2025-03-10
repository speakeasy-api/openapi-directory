/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;



/**
 * ImageAttributeLaunchPermissions - Describes a launch permission.
 */
public class ImageAttributeLaunchPermissions {
    
    public ImageAttributeLaunchPermissionsGroupEnum group;

    public ImageAttributeLaunchPermissions withGroup(ImageAttributeLaunchPermissionsGroupEnum group) {
        this.group = group;
        return this;
    }
    
    
    public String organizationArn;

    public ImageAttributeLaunchPermissions withOrganizationArn(String organizationArn) {
        this.organizationArn = organizationArn;
        return this;
    }
    
    
    public String organizationalUnitArn;

    public ImageAttributeLaunchPermissions withOrganizationalUnitArn(String organizationalUnitArn) {
        this.organizationalUnitArn = organizationalUnitArn;
        return this;
    }
    
    
    public String userId;

    public ImageAttributeLaunchPermissions withUserId(String userId) {
        this.userId = userId;
        return this;
    }
    
    public ImageAttributeLaunchPermissions(){}
}
