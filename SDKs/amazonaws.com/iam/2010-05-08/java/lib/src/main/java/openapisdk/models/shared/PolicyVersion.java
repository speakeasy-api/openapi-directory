package openapisdk.models.shared;

import java.time.OffsetDateTime;

/**
 * PolicyVersion
 * <p>Contains information about a version of a managed policy.</p> <p>This data type is used as a response element in the <a>CreatePolicyVersion</a>, <a>GetPolicyVersion</a>, <a>ListPolicyVersions</a>, and <a>GetAccountAuthorizationDetails</a> operations. </p> <p>For more information about managed policies, refer to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>. </p>
**/
public class PolicyVersion {
    public OffsetDateTime createDate;
    public PolicyVersion withCreateDate(OffsetDateTime createDate) {
        this.createDate = createDate;
        return this;
    }
    public String document;
    public PolicyVersion withDocument(String document) {
        this.document = document;
        return this;
    }
    public Boolean isDefaultVersion;
    public PolicyVersion withIsDefaultVersion(Boolean isDefaultVersion) {
        this.isDefaultVersion = isDefaultVersion;
        return this;
    }
    public String versionId;
    public PolicyVersion withVersionId(String versionId) {
        this.versionId = versionId;
        return this;
    }
}