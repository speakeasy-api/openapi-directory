package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AssociateWebsiteCertificateAuthorityResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("WebsiteCaId")
    public String websiteCaId;
    public AssociateWebsiteCertificateAuthorityResponse withWebsiteCaId(String websiteCaId) {
        this.websiteCaId = websiteCaId;
        return this;
    }
}