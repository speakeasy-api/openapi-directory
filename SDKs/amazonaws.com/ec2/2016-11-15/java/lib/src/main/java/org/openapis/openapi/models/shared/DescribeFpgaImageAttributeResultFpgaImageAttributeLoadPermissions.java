/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;



/**
 * DescribeFpgaImageAttributeResultFpgaImageAttributeLoadPermissions - Describes a load permission.
 */
public class DescribeFpgaImageAttributeResultFpgaImageAttributeLoadPermissions {
    
    public DescribeFpgaImageAttributeResultFpgaImageAttributeLoadPermissionsGroupEnum group;

    public DescribeFpgaImageAttributeResultFpgaImageAttributeLoadPermissions withGroup(DescribeFpgaImageAttributeResultFpgaImageAttributeLoadPermissionsGroupEnum group) {
        this.group = group;
        return this;
    }
    
    
    public String userId;

    public DescribeFpgaImageAttributeResultFpgaImageAttributeLoadPermissions withUserId(String userId) {
        this.userId = userId;
        return this;
    }
    
    public DescribeFpgaImageAttributeResultFpgaImageAttributeLoadPermissions(){}
}
