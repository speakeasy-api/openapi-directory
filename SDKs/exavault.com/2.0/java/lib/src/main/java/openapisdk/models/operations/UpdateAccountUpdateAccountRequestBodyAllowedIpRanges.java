package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateAccountUpdateAccountRequestBodyAllowedIpRanges {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ipEnd")
    public String ipEnd;
    public UpdateAccountUpdateAccountRequestBodyAllowedIpRanges withIpEnd(String ipEnd) {
        this.ipEnd = ipEnd;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ipStart")
    public String ipStart;
    public UpdateAccountUpdateAccountRequestBodyAllowedIpRanges withIpStart(String ipStart) {
        this.ipStart = ipStart;
        return this;
    }
}