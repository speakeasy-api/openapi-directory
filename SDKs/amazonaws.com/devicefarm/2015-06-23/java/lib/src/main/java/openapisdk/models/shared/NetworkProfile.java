package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * NetworkProfile
 * An array of settings that describes characteristics of a network profile.
**/
public class NetworkProfile {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("arn")
    public String arn;
    public NetworkProfile withArn(String arn) {
        this.arn = arn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public NetworkProfile withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("downlinkBandwidthBits")
    public Long downlinkBandwidthBits;
    public NetworkProfile withDownlinkBandwidthBits(Long downlinkBandwidthBits) {
        this.downlinkBandwidthBits = downlinkBandwidthBits;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("downlinkDelayMs")
    public Long downlinkDelayMs;
    public NetworkProfile withDownlinkDelayMs(Long downlinkDelayMs) {
        this.downlinkDelayMs = downlinkDelayMs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("downlinkJitterMs")
    public Long downlinkJitterMs;
    public NetworkProfile withDownlinkJitterMs(Long downlinkJitterMs) {
        this.downlinkJitterMs = downlinkJitterMs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("downlinkLossPercent")
    public Long downlinkLossPercent;
    public NetworkProfile withDownlinkLossPercent(Long downlinkLossPercent) {
        this.downlinkLossPercent = downlinkLossPercent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public NetworkProfile withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public NetworkProfileTypeEnum type;
    public NetworkProfile withType(NetworkProfileTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uplinkBandwidthBits")
    public Long uplinkBandwidthBits;
    public NetworkProfile withUplinkBandwidthBits(Long uplinkBandwidthBits) {
        this.uplinkBandwidthBits = uplinkBandwidthBits;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uplinkDelayMs")
    public Long uplinkDelayMs;
    public NetworkProfile withUplinkDelayMs(Long uplinkDelayMs) {
        this.uplinkDelayMs = uplinkDelayMs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uplinkJitterMs")
    public Long uplinkJitterMs;
    public NetworkProfile withUplinkJitterMs(Long uplinkJitterMs) {
        this.uplinkJitterMs = uplinkJitterMs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uplinkLossPercent")
    public Long uplinkLossPercent;
    public NetworkProfile withUplinkLossPercent(Long uplinkLossPercent) {
        this.uplinkLossPercent = uplinkLossPercent;
        return this;
    }
}