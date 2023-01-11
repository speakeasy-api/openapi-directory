package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeregisterCertificateRequest {
    @JsonProperty("CertificateId")
    public String certificateId;
    public DeregisterCertificateRequest withCertificateId(String certificateId) {
        this.certificateId = certificateId;
        return this;
    }
    @JsonProperty("DirectoryId")
    public String directoryId;
    public DeregisterCertificateRequest withDirectoryId(String directoryId) {
        this.directoryId = directoryId;
        return this;
    }
}