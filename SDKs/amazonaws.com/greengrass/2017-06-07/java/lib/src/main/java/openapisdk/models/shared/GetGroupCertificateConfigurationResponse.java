package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetGroupCertificateConfigurationResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CertificateAuthorityExpiryInMilliseconds")
    public String certificateAuthorityExpiryInMilliseconds;
    public GetGroupCertificateConfigurationResponse withCertificateAuthorityExpiryInMilliseconds(String certificateAuthorityExpiryInMilliseconds) {
        this.certificateAuthorityExpiryInMilliseconds = certificateAuthorityExpiryInMilliseconds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CertificateExpiryInMilliseconds")
    public String certificateExpiryInMilliseconds;
    public GetGroupCertificateConfigurationResponse withCertificateExpiryInMilliseconds(String certificateExpiryInMilliseconds) {
        this.certificateExpiryInMilliseconds = certificateExpiryInMilliseconds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GroupId")
    public String groupId;
    public GetGroupCertificateConfigurationResponse withGroupId(String groupId) {
        this.groupId = groupId;
        return this;
    }
}