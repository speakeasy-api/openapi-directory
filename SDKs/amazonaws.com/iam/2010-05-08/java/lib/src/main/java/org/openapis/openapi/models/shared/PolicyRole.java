/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;



/**
 * PolicyRole - &lt;p&gt;Contains information about a role that a managed policy is attached to.&lt;/p&gt; &lt;p&gt;This data type is used as a response element in the &lt;a&gt;ListEntitiesForPolicy&lt;/a&gt; operation. &lt;/p&gt; &lt;p&gt;For more information about managed policies, refer to &lt;a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html"&gt;Managed policies and inline policies&lt;/a&gt; in the &lt;i&gt;IAM User Guide&lt;/i&gt;. &lt;/p&gt;
 */
public class PolicyRole {
    
    public String roleId;

    public PolicyRole withRoleId(String roleId) {
        this.roleId = roleId;
        return this;
    }
    
    
    public String roleName;

    public PolicyRole withRoleName(String roleName) {
        this.roleName = roleName;
        return this;
    }
    
    public PolicyRole(){}
}
