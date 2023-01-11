package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * IoUsage
 * Contains I/O usage metrics for a command that was invoked.
**/
public class IoUsage {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReadIOs")
    public Long readIOs;
    public IoUsage withReadIOs(Long readIOs) {
        this.readIOs = readIOs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("WriteIOs")
    public Long writeIOs;
    public IoUsage withWriteIOs(Long writeIOs) {
        this.writeIOs = writeIOs;
        return this;
    }
}