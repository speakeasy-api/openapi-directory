/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;



/**
 * AuthorizeSecurityGroupEgressResultSecurityGroupRulesReferencedGroupInfo - Describes the security group that is referenced in the rule.
 */
public class AuthorizeSecurityGroupEgressResultSecurityGroupRulesReferencedGroupInfo {
    
    public String groupId;

    public AuthorizeSecurityGroupEgressResultSecurityGroupRulesReferencedGroupInfo withGroupId(String groupId) {
        this.groupId = groupId;
        return this;
    }
    
    
    public String peeringStatus;

    public AuthorizeSecurityGroupEgressResultSecurityGroupRulesReferencedGroupInfo withPeeringStatus(String peeringStatus) {
        this.peeringStatus = peeringStatus;
        return this;
    }
    
    
    public String userId;

    public AuthorizeSecurityGroupEgressResultSecurityGroupRulesReferencedGroupInfo withUserId(String userId) {
        this.userId = userId;
        return this;
    }
    
    
    public String vpcId;

    public AuthorizeSecurityGroupEgressResultSecurityGroupRulesReferencedGroupInfo withVpcId(String vpcId) {
        this.vpcId = vpcId;
        return this;
    }
    
    
    public String vpcPeeringConnectionId;

    public AuthorizeSecurityGroupEgressResultSecurityGroupRulesReferencedGroupInfo withVpcPeeringConnectionId(String vpcPeeringConnectionId) {
        this.vpcPeeringConnectionId = vpcPeeringConnectionId;
        return this;
    }
    
    public AuthorizeSecurityGroupEgressResultSecurityGroupRulesReferencedGroupInfo(){}
}
