package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeProtectionResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Protection")
    public Protection protection;
    public DescribeProtectionResponse withProtection(Protection protection) {
        this.protection = protection;
        return this;
    }
}