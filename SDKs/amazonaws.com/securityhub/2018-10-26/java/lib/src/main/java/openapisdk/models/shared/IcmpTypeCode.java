package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * IcmpTypeCode
 * An Internet Control Message Protocol (ICMP) type and code.
**/
public class IcmpTypeCode {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Code")
    public Long code;
    public IcmpTypeCode withCode(Long code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Type")
    public Long type;
    public IcmpTypeCode withType(Long type) {
        this.type = type;
        return this;
    }
}