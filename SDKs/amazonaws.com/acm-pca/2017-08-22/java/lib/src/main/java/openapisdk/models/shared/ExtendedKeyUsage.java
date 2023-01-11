package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ExtendedKeyUsage
 * Specifies additional purposes for which the certified public key may be used other than basic purposes indicated in the <code>KeyUsage</code> extension.
**/
public class ExtendedKeyUsage {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ExtendedKeyUsageObjectIdentifier")
    public String extendedKeyUsageObjectIdentifier;
    public ExtendedKeyUsage withExtendedKeyUsageObjectIdentifier(String extendedKeyUsageObjectIdentifier) {
        this.extendedKeyUsageObjectIdentifier = extendedKeyUsageObjectIdentifier;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ExtendedKeyUsageType")
    public ExtendedKeyUsageTypeEnum extendedKeyUsageType;
    public ExtendedKeyUsage withExtendedKeyUsageType(ExtendedKeyUsageTypeEnum extendedKeyUsageType) {
        this.extendedKeyUsageType = extendedKeyUsageType;
        return this;
    }
}