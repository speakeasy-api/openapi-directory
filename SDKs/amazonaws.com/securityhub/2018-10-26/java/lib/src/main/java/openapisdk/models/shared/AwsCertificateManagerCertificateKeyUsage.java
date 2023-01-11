package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsCertificateManagerCertificateKeyUsage
 * Contains information about a key usage X.509 v3 extension object.
**/
public class AwsCertificateManagerCertificateKeyUsage {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public AwsCertificateManagerCertificateKeyUsage withName(String name) {
        this.name = name;
        return this;
    }
}