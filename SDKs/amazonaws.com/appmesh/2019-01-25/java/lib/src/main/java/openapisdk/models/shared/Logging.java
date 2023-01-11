package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Logging
 * An object that represents the logging information for a virtual node.
**/
public class Logging {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accessLog")
    public AccessLog accessLog;
    public Logging withAccessLog(AccessLog accessLog) {
        this.accessLog = accessLog;
        return this;
    }
}