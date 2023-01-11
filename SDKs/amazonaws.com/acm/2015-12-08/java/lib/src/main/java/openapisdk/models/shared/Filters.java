package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Filters
 * This structure can be used in the <a>ListCertificates</a> action to filter the output of the certificate list. 
**/
public class Filters {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("extendedKeyUsage")
    public ExtendedKeyUsageNameEnum[] extendedKeyUsage;
    public Filters withExtendedKeyUsage(ExtendedKeyUsageNameEnum[] extendedKeyUsage) {
        this.extendedKeyUsage = extendedKeyUsage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("keyTypes")
    public KeyAlgorithmEnum[] keyTypes;
    public Filters withKeyTypes(KeyAlgorithmEnum[] keyTypes) {
        this.keyTypes = keyTypes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("keyUsage")
    public KeyUsageNameEnum[] keyUsage;
    public Filters withKeyUsage(KeyUsageNameEnum[] keyUsage) {
        this.keyUsage = keyUsage;
        return this;
    }
}