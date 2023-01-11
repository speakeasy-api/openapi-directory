package openapisdk.models.shared;



/**
 * PolicyTypeDescription
 * Information about a policy type.
**/
public class PolicyTypeDescription {
    public String description;
    public PolicyTypeDescription withDescription(String description) {
        this.description = description;
        return this;
    }
    public PolicyAttributeTypeDescription[] policyAttributeTypeDescriptions;
    public PolicyTypeDescription withPolicyAttributeTypeDescriptions(PolicyAttributeTypeDescription[] policyAttributeTypeDescriptions) {
        this.policyAttributeTypeDescriptions = policyAttributeTypeDescriptions;
        return this;
    }
    public String policyTypeName;
    public PolicyTypeDescription withPolicyTypeName(String policyTypeName) {
        this.policyTypeName = policyTypeName;
        return this;
    }
}