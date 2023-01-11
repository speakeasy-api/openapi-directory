package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsEc2VpnConnectionOptionsTunnelOptionsDetails
 * The VPN tunnel options.
**/
public class AwsEc2VpnConnectionOptionsTunnelOptionsDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DpdTimeoutSeconds")
    public Long dpdTimeoutSeconds;
    public AwsEc2VpnConnectionOptionsTunnelOptionsDetails withDpdTimeoutSeconds(Long dpdTimeoutSeconds) {
        this.dpdTimeoutSeconds = dpdTimeoutSeconds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IkeVersions")
    public String[] ikeVersions;
    public AwsEc2VpnConnectionOptionsTunnelOptionsDetails withIkeVersions(String[] ikeVersions) {
        this.ikeVersions = ikeVersions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OutsideIpAddress")
    public String outsideIpAddress;
    public AwsEc2VpnConnectionOptionsTunnelOptionsDetails withOutsideIpAddress(String outsideIpAddress) {
        this.outsideIpAddress = outsideIpAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Phase1DhGroupNumbers")
    public Long[] phase1DhGroupNumbers;
    public AwsEc2VpnConnectionOptionsTunnelOptionsDetails withPhase1DhGroupNumbers(Long[] phase1DhGroupNumbers) {
        this.phase1DhGroupNumbers = phase1DhGroupNumbers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Phase1EncryptionAlgorithms")
    public String[] phase1EncryptionAlgorithms;
    public AwsEc2VpnConnectionOptionsTunnelOptionsDetails withPhase1EncryptionAlgorithms(String[] phase1EncryptionAlgorithms) {
        this.phase1EncryptionAlgorithms = phase1EncryptionAlgorithms;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Phase1IntegrityAlgorithms")
    public String[] phase1IntegrityAlgorithms;
    public AwsEc2VpnConnectionOptionsTunnelOptionsDetails withPhase1IntegrityAlgorithms(String[] phase1IntegrityAlgorithms) {
        this.phase1IntegrityAlgorithms = phase1IntegrityAlgorithms;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Phase1LifetimeSeconds")
    public Long phase1LifetimeSeconds;
    public AwsEc2VpnConnectionOptionsTunnelOptionsDetails withPhase1LifetimeSeconds(Long phase1LifetimeSeconds) {
        this.phase1LifetimeSeconds = phase1LifetimeSeconds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Phase2DhGroupNumbers")
    public Long[] phase2DhGroupNumbers;
    public AwsEc2VpnConnectionOptionsTunnelOptionsDetails withPhase2DhGroupNumbers(Long[] phase2DhGroupNumbers) {
        this.phase2DhGroupNumbers = phase2DhGroupNumbers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Phase2EncryptionAlgorithms")
    public String[] phase2EncryptionAlgorithms;
    public AwsEc2VpnConnectionOptionsTunnelOptionsDetails withPhase2EncryptionAlgorithms(String[] phase2EncryptionAlgorithms) {
        this.phase2EncryptionAlgorithms = phase2EncryptionAlgorithms;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Phase2IntegrityAlgorithms")
    public String[] phase2IntegrityAlgorithms;
    public AwsEc2VpnConnectionOptionsTunnelOptionsDetails withPhase2IntegrityAlgorithms(String[] phase2IntegrityAlgorithms) {
        this.phase2IntegrityAlgorithms = phase2IntegrityAlgorithms;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Phase2LifetimeSeconds")
    public Long phase2LifetimeSeconds;
    public AwsEc2VpnConnectionOptionsTunnelOptionsDetails withPhase2LifetimeSeconds(Long phase2LifetimeSeconds) {
        this.phase2LifetimeSeconds = phase2LifetimeSeconds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PreSharedKey")
    public String preSharedKey;
    public AwsEc2VpnConnectionOptionsTunnelOptionsDetails withPreSharedKey(String preSharedKey) {
        this.preSharedKey = preSharedKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RekeyFuzzPercentage")
    public Long rekeyFuzzPercentage;
    public AwsEc2VpnConnectionOptionsTunnelOptionsDetails withRekeyFuzzPercentage(Long rekeyFuzzPercentage) {
        this.rekeyFuzzPercentage = rekeyFuzzPercentage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RekeyMarginTimeSeconds")
    public Long rekeyMarginTimeSeconds;
    public AwsEc2VpnConnectionOptionsTunnelOptionsDetails withRekeyMarginTimeSeconds(Long rekeyMarginTimeSeconds) {
        this.rekeyMarginTimeSeconds = rekeyMarginTimeSeconds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReplayWindowSize")
    public Long replayWindowSize;
    public AwsEc2VpnConnectionOptionsTunnelOptionsDetails withReplayWindowSize(Long replayWindowSize) {
        this.replayWindowSize = replayWindowSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TunnelInsideCidr")
    public String tunnelInsideCidr;
    public AwsEc2VpnConnectionOptionsTunnelOptionsDetails withTunnelInsideCidr(String tunnelInsideCidr) {
        this.tunnelInsideCidr = tunnelInsideCidr;
        return this;
    }
}