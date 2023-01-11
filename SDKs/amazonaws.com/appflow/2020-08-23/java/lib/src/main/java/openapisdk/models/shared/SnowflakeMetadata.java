package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SnowflakeMetadata
 *  The connector metadata specific to Snowflake. 
**/
public class SnowflakeMetadata {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("supportedRegions")
    public String[] supportedRegions;
    public SnowflakeMetadata withSupportedRegions(String[] supportedRegions) {
        this.supportedRegions = supportedRegions;
        return this;
    }
}