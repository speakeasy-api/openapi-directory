package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AccessMethod
 * Describes the type and format of extension access. Only one of <code>CustomObjectIdentifier</code> or <code>AccessMethodType</code> may be provided. Providing both results in <code>InvalidArgsException</code>.
**/
public class AccessMethod {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AccessMethodType")
    public AccessMethodTypeEnum accessMethodType;
    public AccessMethod withAccessMethodType(AccessMethodTypeEnum accessMethodType) {
        this.accessMethodType = accessMethodType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CustomObjectIdentifier")
    public String customObjectIdentifier;
    public AccessMethod withCustomObjectIdentifier(String customObjectIdentifier) {
        this.customObjectIdentifier = customObjectIdentifier;
        return this;
    }
}