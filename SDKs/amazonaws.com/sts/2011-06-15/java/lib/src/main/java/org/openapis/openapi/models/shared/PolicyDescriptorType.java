/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;



/**
 * PolicyDescriptorType - A reference to the IAM managed policy that is passed as a session policy for a role session or a federated user session.
 */
public class PolicyDescriptorType {
    
    public String arn;

    public PolicyDescriptorType withArn(String arn) {
        this.arn = arn;
        return this;
    }
    
    public PolicyDescriptorType(){}
}
