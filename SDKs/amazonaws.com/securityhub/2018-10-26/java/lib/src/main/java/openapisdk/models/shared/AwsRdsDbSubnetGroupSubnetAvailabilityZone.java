package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsRdsDbSubnetGroupSubnetAvailabilityZone
 * An Availability Zone for a subnet in a subnet group.
**/
public class AwsRdsDbSubnetGroupSubnetAvailabilityZone {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public AwsRdsDbSubnetGroupSubnetAvailabilityZone withName(String name) {
        this.name = name;
        return this;
    }
}