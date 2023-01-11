package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetGroupCertificateAuthorityResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GroupCertificateAuthorityArn")
    public String groupCertificateAuthorityArn;
    public GetGroupCertificateAuthorityResponse withGroupCertificateAuthorityArn(String groupCertificateAuthorityArn) {
        this.groupCertificateAuthorityArn = groupCertificateAuthorityArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GroupCertificateAuthorityId")
    public String groupCertificateAuthorityId;
    public GetGroupCertificateAuthorityResponse withGroupCertificateAuthorityId(String groupCertificateAuthorityId) {
        this.groupCertificateAuthorityId = groupCertificateAuthorityId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PemEncodedCertificate")
    public String pemEncodedCertificate;
    public GetGroupCertificateAuthorityResponse withPemEncodedCertificate(String pemEncodedCertificate) {
        this.pemEncodedCertificate = pemEncodedCertificate;
        return this;
    }
}