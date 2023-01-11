package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsIamPolicyDetails
 * Represents an IAM permissions policy.
**/
public class AwsIamPolicyDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AttachmentCount")
    public Long attachmentCount;
    public AwsIamPolicyDetails withAttachmentCount(Long attachmentCount) {
        this.attachmentCount = attachmentCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CreateDate")
    public String createDate;
    public AwsIamPolicyDetails withCreateDate(String createDate) {
        this.createDate = createDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DefaultVersionId")
    public String defaultVersionId;
    public AwsIamPolicyDetails withDefaultVersionId(String defaultVersionId) {
        this.defaultVersionId = defaultVersionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public AwsIamPolicyDetails withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IsAttachable")
    public Boolean isAttachable;
    public AwsIamPolicyDetails withIsAttachable(Boolean isAttachable) {
        this.isAttachable = isAttachable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Path")
    public String path;
    public AwsIamPolicyDetails withPath(String path) {
        this.path = path;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PermissionsBoundaryUsageCount")
    public Long permissionsBoundaryUsageCount;
    public AwsIamPolicyDetails withPermissionsBoundaryUsageCount(Long permissionsBoundaryUsageCount) {
        this.permissionsBoundaryUsageCount = permissionsBoundaryUsageCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PolicyId")
    public String policyId;
    public AwsIamPolicyDetails withPolicyId(String policyId) {
        this.policyId = policyId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PolicyName")
    public String policyName;
    public AwsIamPolicyDetails withPolicyName(String policyName) {
        this.policyName = policyName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PolicyVersionList")
    public AwsIamPolicyVersion[] policyVersionList;
    public AwsIamPolicyDetails withPolicyVersionList(AwsIamPolicyVersion[] policyVersionList) {
        this.policyVersionList = policyVersionList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UpdateDate")
    public String updateDate;
    public AwsIamPolicyDetails withUpdateDate(String updateDate) {
        this.updateDate = updateDate;
        return this;
    }
}