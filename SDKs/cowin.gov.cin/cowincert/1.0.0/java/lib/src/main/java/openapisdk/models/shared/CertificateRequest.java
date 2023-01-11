package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CertificateRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("beneficiaryId")
    public String beneficiaryId;
    public CertificateRequest withBeneficiaryId(String beneficiaryId) {
        this.beneficiaryId = beneficiaryId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mobile")
    public String mobile;
    public CertificateRequest withMobile(String mobile) {
        this.mobile = mobile;
        return this;
    }
}