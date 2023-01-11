package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsCertificateManagerCertificateExtendedKeyUsage
 * Contains information about an extended key usage X.509 v3 extension object.
**/
public class AwsCertificateManagerCertificateExtendedKeyUsage {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public AwsCertificateManagerCertificateExtendedKeyUsage withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OId")
    public String oId;
    public AwsCertificateManagerCertificateExtendedKeyUsage withOId(String oId) {
        this.oId = oId;
        return this;
    }
}