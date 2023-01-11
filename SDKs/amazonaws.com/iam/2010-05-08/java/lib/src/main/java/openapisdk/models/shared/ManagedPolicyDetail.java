package openapisdk.models.shared;

import java.time.OffsetDateTime;

/**
 * ManagedPolicyDetail
 * <p>Contains information about a managed policy, including the policy's ARN, versions, and the number of principal entities (users, groups, and roles) that the policy is attached to.</p> <p>This data type is used as a response element in the <a>GetAccountAuthorizationDetails</a> operation.</p> <p>For more information about managed policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>. </p>
**/
public class ManagedPolicyDetail {
    public String arn;
    public ManagedPolicyDetail withArn(String arn) {
        this.arn = arn;
        return this;
    }
    public Long attachmentCount;
    public ManagedPolicyDetail withAttachmentCount(Long attachmentCount) {
        this.attachmentCount = attachmentCount;
        return this;
    }
    public OffsetDateTime createDate;
    public ManagedPolicyDetail withCreateDate(OffsetDateTime createDate) {
        this.createDate = createDate;
        return this;
    }
    public String defaultVersionId;
    public ManagedPolicyDetail withDefaultVersionId(String defaultVersionId) {
        this.defaultVersionId = defaultVersionId;
        return this;
    }
    public String description;
    public ManagedPolicyDetail withDescription(String description) {
        this.description = description;
        return this;
    }
    public Boolean isAttachable;
    public ManagedPolicyDetail withIsAttachable(Boolean isAttachable) {
        this.isAttachable = isAttachable;
        return this;
    }
    public String path;
    public ManagedPolicyDetail withPath(String path) {
        this.path = path;
        return this;
    }
    public Long permissionsBoundaryUsageCount;
    public ManagedPolicyDetail withPermissionsBoundaryUsageCount(Long permissionsBoundaryUsageCount) {
        this.permissionsBoundaryUsageCount = permissionsBoundaryUsageCount;
        return this;
    }
    public String policyId;
    public ManagedPolicyDetail withPolicyId(String policyId) {
        this.policyId = policyId;
        return this;
    }
    public String policyName;
    public ManagedPolicyDetail withPolicyName(String policyName) {
        this.policyName = policyName;
        return this;
    }
    public PolicyVersion[] policyVersionList;
    public ManagedPolicyDetail withPolicyVersionList(PolicyVersion[] policyVersionList) {
        this.policyVersionList = policyVersionList;
        return this;
    }
    public OffsetDateTime updateDate;
    public ManagedPolicyDetail withUpdateDate(OffsetDateTime updateDate) {
        this.updateDate = updateDate;
        return this;
    }
}