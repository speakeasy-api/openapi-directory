package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetCertificatesRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("certificateName")
    public String certificateName;
    public GetCertificatesRequest withCertificateName(String certificateName) {
        this.certificateName = certificateName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("certificateStatuses")
    public CertificateStatusEnum[] certificateStatuses;
    public GetCertificatesRequest withCertificateStatuses(CertificateStatusEnum[] certificateStatuses) {
        this.certificateStatuses = certificateStatuses;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("includeCertificateDetails")
    public Boolean includeCertificateDetails;
    public GetCertificatesRequest withIncludeCertificateDetails(Boolean includeCertificateDetails) {
        this.includeCertificateDetails = includeCertificateDetails;
        return this;
    }
}