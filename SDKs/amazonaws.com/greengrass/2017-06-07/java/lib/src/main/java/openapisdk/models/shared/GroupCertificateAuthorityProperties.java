package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GroupCertificateAuthorityProperties
 * Information about a certificate authority for a group.
**/
public class GroupCertificateAuthorityProperties {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GroupCertificateAuthorityArn")
    public String groupCertificateAuthorityArn;
    public GroupCertificateAuthorityProperties withGroupCertificateAuthorityArn(String groupCertificateAuthorityArn) {
        this.groupCertificateAuthorityArn = groupCertificateAuthorityArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GroupCertificateAuthorityId")
    public String groupCertificateAuthorityId;
    public GroupCertificateAuthorityProperties withGroupCertificateAuthorityId(String groupCertificateAuthorityId) {
        this.groupCertificateAuthorityId = groupCertificateAuthorityId;
        return this;
    }
}