package openapisdk.models.shared;



/**
 * PolicyGrantingServiceAccess
 * <p>Contains details about the permissions policies that are attached to the specified identity (user, group, or role).</p> <p>This data type is an element of the <a>ListPoliciesGrantingServiceAccessEntry</a> object.</p>
**/
public class PolicyGrantingServiceAccess {
    public String entityName;
    public PolicyGrantingServiceAccess withEntityName(String entityName) {
        this.entityName = entityName;
        return this;
    }
    public PolicyOwnerEntityTypeEnum entityType;
    public PolicyGrantingServiceAccess withEntityType(PolicyOwnerEntityTypeEnum entityType) {
        this.entityType = entityType;
        return this;
    }
    public String policyArn;
    public PolicyGrantingServiceAccess withPolicyArn(String policyArn) {
        this.policyArn = policyArn;
        return this;
    }
    public String policyName;
    public PolicyGrantingServiceAccess withPolicyName(String policyName) {
        this.policyName = policyName;
        return this;
    }
    public PolicyTypeEnum policyType;
    public PolicyGrantingServiceAccess withPolicyType(PolicyTypeEnum policyType) {
        this.policyType = policyType;
        return this;
    }
}