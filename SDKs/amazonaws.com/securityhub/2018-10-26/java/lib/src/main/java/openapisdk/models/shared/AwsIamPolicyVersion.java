package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsIamPolicyVersion
 * A version of an IAM policy.
**/
public class AwsIamPolicyVersion {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CreateDate")
    public String createDate;
    public AwsIamPolicyVersion withCreateDate(String createDate) {
        this.createDate = createDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IsDefaultVersion")
    public Boolean isDefaultVersion;
    public AwsIamPolicyVersion withIsDefaultVersion(Boolean isDefaultVersion) {
        this.isDefaultVersion = isDefaultVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("VersionId")
    public String versionId;
    public AwsIamPolicyVersion withVersionId(String versionId) {
        this.versionId = versionId;
        return this;
    }
}