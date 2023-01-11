package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateCdnEndpointRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("certificate_id")
    public String certificateId;
    public UpdateCdnEndpointRequestBody withCertificateId(String certificateId) {
        this.certificateId = certificateId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("custom_domain")
    public String customDomain;
    public UpdateCdnEndpointRequestBody withCustomDomain(String customDomain) {
        this.customDomain = customDomain;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ttl")
    public Long ttl;
    public UpdateCdnEndpointRequestBody withTtl(Long ttl) {
        this.ttl = ttl;
        return this;
    }
}