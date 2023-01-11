package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TcpFlagField
 * TCP flags and masks to inspect packets for, used in stateless rules <a>MatchAttributes</a> settings.
**/
public class TcpFlagField {
    @JsonProperty("Flags")
    public TcpFlagEnum[] flags;
    public TcpFlagField withFlags(TcpFlagEnum[] flags) {
        this.flags = flags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Masks")
    public TcpFlagEnum[] masks;
    public TcpFlagField withMasks(TcpFlagEnum[] masks) {
        this.masks = masks;
        return this;
    }
}