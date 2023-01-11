package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TimestampPartition
 *  A partition dimension defined by a timestamp attribute. 
**/
public class TimestampPartition {
    @JsonProperty("attributeName")
    public String attributeName;
    public TimestampPartition withAttributeName(String attributeName) {
        this.attributeName = attributeName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timestampFormat")
    public String timestampFormat;
    public TimestampPartition withTimestampFormat(String timestampFormat) {
        this.timestampFormat = timestampFormat;
        return this;
    }
}