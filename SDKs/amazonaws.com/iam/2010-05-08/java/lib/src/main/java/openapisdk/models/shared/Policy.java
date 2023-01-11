package openapisdk.models.shared;

import java.time.OffsetDateTime;

/**
 * Policy
 * <p>Contains information about a managed policy.</p> <p>This data type is used as a response element in the <a>CreatePolicy</a>, <a>GetPolicy</a>, and <a>ListPolicies</a> operations. </p> <p>For more information about managed policies, refer to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>. </p>
**/
public class Policy {
    public String arn;
    public Policy withArn(String arn) {
        this.arn = arn;
        return this;
    }
    public Long attachmentCount;
    public Policy withAttachmentCount(Long attachmentCount) {
        this.attachmentCount = attachmentCount;
        return this;
    }
    public OffsetDateTime createDate;
    public Policy withCreateDate(OffsetDateTime createDate) {
        this.createDate = createDate;
        return this;
    }
    public String defaultVersionId;
    public Policy withDefaultVersionId(String defaultVersionId) {
        this.defaultVersionId = defaultVersionId;
        return this;
    }
    public String description;
    public Policy withDescription(String description) {
        this.description = description;
        return this;
    }
    public Boolean isAttachable;
    public Policy withIsAttachable(Boolean isAttachable) {
        this.isAttachable = isAttachable;
        return this;
    }
    public String path;
    public Policy withPath(String path) {
        this.path = path;
        return this;
    }
    public Long permissionsBoundaryUsageCount;
    public Policy withPermissionsBoundaryUsageCount(Long permissionsBoundaryUsageCount) {
        this.permissionsBoundaryUsageCount = permissionsBoundaryUsageCount;
        return this;
    }
    public String policyId;
    public Policy withPolicyId(String policyId) {
        this.policyId = policyId;
        return this;
    }
    public String policyName;
    public Policy withPolicyName(String policyName) {
        this.policyName = policyName;
        return this;
    }
    public Tag[] tags;
    public Policy withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
    public OffsetDateTime updateDate;
    public Policy withUpdateDate(OffsetDateTime updateDate) {
        this.updateDate = updateDate;
        return this;
    }
}