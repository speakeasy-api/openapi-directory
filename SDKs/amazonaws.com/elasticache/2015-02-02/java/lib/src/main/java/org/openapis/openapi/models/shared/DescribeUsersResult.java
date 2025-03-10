/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;



/**
 * DescribeUsersResult - Success
 */
public class DescribeUsersResult {
    
    public String marker;

    public DescribeUsersResult withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    
    
    public User[] users;

    public DescribeUsersResult withUsers(User[] users) {
        this.users = users;
        return this;
    }
    
    public DescribeUsersResult(){}
}
