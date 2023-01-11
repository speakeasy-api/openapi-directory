package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Fileshare {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("capacity")
    public Long capacity;
    public Fileshare withCapacity(Long capacity) {
        this.capacity = capacity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("created_date")
    public String createdDate;
    public Fileshare withCreatedDate(String createdDate) {
        this.createdDate = createdDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fsName")
    public String fsName;
    public Fileshare withFsName(String fsName) {
        this.fsName = fsName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hostPath")
    public String hostPath;
    public Fileshare withHostPath(String hostPath) {
        this.hostPath = hostPath;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iops")
    public Double iops;
    public Fileshare withIops(Double iops) {
        this.iops = iops;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iopsTotal")
    public Long iopsTotal;
    public Fileshare withIopsTotal(Long iopsTotal) {
        this.iopsTotal = iopsTotal;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("orderId")
    public String orderId;
    public Fileshare withOrderId(String orderId) {
        this.orderId = orderId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("provider")
    public String provider;
    public Fileshare withProvider(String provider) {
        this.provider = provider;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("spaceGuid")
    public String spaceGuid;
    public Fileshare withSpaceGuid(String spaceGuid) {
        this.spaceGuid = spaceGuid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public String state;
    public Fileshare withState(String state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updated_date")
    public String updatedDate;
    public Fileshare withUpdatedDate(String updatedDate) {
        this.updatedDate = updatedDate;
        return this;
    }
}