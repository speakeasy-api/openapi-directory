package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListGroupCertificateAuthoritiesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GroupCertificateAuthorities")
    public GroupCertificateAuthorityProperties[] groupCertificateAuthorities;
    public ListGroupCertificateAuthoritiesResponse withGroupCertificateAuthorities(GroupCertificateAuthorityProperties[] groupCertificateAuthorities) {
        this.groupCertificateAuthorities = groupCertificateAuthorities;
        return this;
    }
}