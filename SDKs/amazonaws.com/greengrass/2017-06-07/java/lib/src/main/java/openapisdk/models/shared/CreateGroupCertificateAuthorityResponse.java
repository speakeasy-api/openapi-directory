package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateGroupCertificateAuthorityResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GroupCertificateAuthorityArn")
    public String groupCertificateAuthorityArn;
    public CreateGroupCertificateAuthorityResponse withGroupCertificateAuthorityArn(String groupCertificateAuthorityArn) {
        this.groupCertificateAuthorityArn = groupCertificateAuthorityArn;
        return this;
    }
}