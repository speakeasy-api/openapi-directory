package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DescribeServicesResponse
 * The list of AWS services returned by the <a>DescribeServices</a> operation.
**/
public class DescribeServicesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("services")
    public Service[] services;
    public DescribeServicesResponse withServices(Service[] services) {
        this.services = services;
        return this;
    }
}