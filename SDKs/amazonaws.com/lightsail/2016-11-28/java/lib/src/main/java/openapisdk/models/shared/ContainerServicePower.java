package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ContainerServicePower
 * <p>Describes the powers that can be specified for an Amazon Lightsail container service.</p> <p>The power specifies the amount of RAM, the number of vCPUs, and the base price of the container service.</p>
**/
public class ContainerServicePower {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cpuCount")
    public Float cpuCount;
    public ContainerServicePower withCpuCount(Float cpuCount) {
        this.cpuCount = cpuCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isActive")
    public Boolean isActive;
    public ContainerServicePower withIsActive(Boolean isActive) {
        this.isActive = isActive;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ContainerServicePower withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("powerId")
    public String powerId;
    public ContainerServicePower withPowerId(String powerId) {
        this.powerId = powerId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("price")
    public Float price;
    public ContainerServicePower withPrice(Float price) {
        this.price = price;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ramSizeInGb")
    public Float ramSizeInGb;
    public ContainerServicePower withRamSizeInGb(Float ramSizeInGb) {
        this.ramSizeInGb = ramSizeInGb;
        return this;
    }
}