package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PrefixConfig
 *  Determines the prefix that Amazon AppFlow applies to the destination folder name. You can name your destination folders according to the flow frequency and date. 
**/
public class PrefixConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("prefixFormat")
    public PrefixFormatEnum prefixFormat;
    public PrefixConfig withPrefixFormat(PrefixFormatEnum prefixFormat) {
        this.prefixFormat = prefixFormat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("prefixType")
    public PrefixTypeEnum prefixType;
    public PrefixConfig withPrefixType(PrefixTypeEnum prefixType) {
        this.prefixType = prefixType;
        return this;
    }
}