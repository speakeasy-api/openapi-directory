package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateGroupCertificateConfigurationRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CertificateExpiryInMilliseconds")
    public String certificateExpiryInMilliseconds;
    public UpdateGroupCertificateConfigurationRequestBody withCertificateExpiryInMilliseconds(String certificateExpiryInMilliseconds) {
        this.certificateExpiryInMilliseconds = certificateExpiryInMilliseconds;
        return this;
    }
}