package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeServicesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("failures")
    public Failure[] failures;
    public DescribeServicesResponse withFailures(Failure[] failures) {
        this.failures = failures;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("services")
    public Service[] services;
    public DescribeServicesResponse withServices(Service[] services) {
        this.services = services;
        return this;
    }
}