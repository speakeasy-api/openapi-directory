package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PolicyAttachment
 * Contains the <code>PolicyType</code>, <code>PolicyId</code>, and the <code>ObjectIdentifier</code> to which it is attached. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/key_concepts_directory.html#key_concepts_policies">Policies</a>.
**/
public class PolicyAttachment {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ObjectIdentifier")
    public String objectIdentifier;
    public PolicyAttachment withObjectIdentifier(String objectIdentifier) {
        this.objectIdentifier = objectIdentifier;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PolicyId")
    public String policyId;
    public PolicyAttachment withPolicyId(String policyId) {
        this.policyId = policyId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PolicyType")
    public String policyType;
    public PolicyAttachment withPolicyType(String policyType) {
        this.policyType = policyType;
        return this;
    }
}