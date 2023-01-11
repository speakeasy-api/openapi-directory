package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsCertificateManagerCertificateResourceRecord
 * Provides details about the CNAME record that is added to the DNS database for domain validation.
**/
public class AwsCertificateManagerCertificateResourceRecord {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public AwsCertificateManagerCertificateResourceRecord withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Type")
    public String type;
    public AwsCertificateManagerCertificateResourceRecord withType(String type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Value")
    public String value;
    public AwsCertificateManagerCertificateResourceRecord withValue(String value) {
        this.value = value;
        return this;
    }
}