package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeCertificateRequest {
    @JsonProperty("CertificateId")
    public String certificateId;
    public DescribeCertificateRequest withCertificateId(String certificateId) {
        this.certificateId = certificateId;
        return this;
    }
    @JsonProperty("DirectoryId")
    public String directoryId;
    public DescribeCertificateRequest withDirectoryId(String directoryId) {
        this.directoryId = directoryId;
        return this;
    }
}