package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DedicatedIp
 * <p>Contains information about a dedicated IP address that is associated with your Amazon SES account.</p> <p>To learn more about requesting dedicated IP addresses, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/dedicated-ip-case.html">Requesting and Relinquishing Dedicated IP Addresses</a> in the <i>Amazon SES Developer Guide</i>.</p>
**/
public class DedicatedIp {
    @JsonProperty("Ip")
    public String ip;
    public DedicatedIp withIp(String ip) {
        this.ip = ip;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PoolName")
    public String poolName;
    public DedicatedIp withPoolName(String poolName) {
        this.poolName = poolName;
        return this;
    }
    @JsonProperty("WarmupPercentage")
    public Long warmupPercentage;
    public DedicatedIp withWarmupPercentage(Long warmupPercentage) {
        this.warmupPercentage = warmupPercentage;
        return this;
    }
    @JsonProperty("WarmupStatus")
    public WarmupStatusEnum warmupStatus;
    public DedicatedIp withWarmupStatus(WarmupStatusEnum warmupStatus) {
        this.warmupStatus = warmupStatus;
        return this;
    }
}