package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ResourceViolation
 * Violation detail based on resource type.
**/
public class ResourceViolation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AwsEc2InstanceViolation")
    public AwsEc2InstanceViolation awsEc2InstanceViolation;
    public ResourceViolation withAwsEc2InstanceViolation(AwsEc2InstanceViolation awsEc2InstanceViolation) {
        this.awsEc2InstanceViolation = awsEc2InstanceViolation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AwsEc2NetworkInterfaceViolation")
    public AwsEc2NetworkInterfaceViolation awsEc2NetworkInterfaceViolation;
    public ResourceViolation withAwsEc2NetworkInterfaceViolation(AwsEc2NetworkInterfaceViolation awsEc2NetworkInterfaceViolation) {
        this.awsEc2NetworkInterfaceViolation = awsEc2NetworkInterfaceViolation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AwsVPCSecurityGroupViolation")
    public AwsVpcSecurityGroupViolation awsVPCSecurityGroupViolation;
    public ResourceViolation withAwsVpcSecurityGroupViolation(AwsVpcSecurityGroupViolation awsVPCSecurityGroupViolation) {
        this.awsVPCSecurityGroupViolation = awsVPCSecurityGroupViolation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DnsDuplicateRuleGroupViolation")
    public DnsDuplicateRuleGroupViolation dnsDuplicateRuleGroupViolation;
    public ResourceViolation withDnsDuplicateRuleGroupViolation(DnsDuplicateRuleGroupViolation dnsDuplicateRuleGroupViolation) {
        this.dnsDuplicateRuleGroupViolation = dnsDuplicateRuleGroupViolation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DnsRuleGroupLimitExceededViolation")
    public DnsRuleGroupLimitExceededViolation dnsRuleGroupLimitExceededViolation;
    public ResourceViolation withDnsRuleGroupLimitExceededViolation(DnsRuleGroupLimitExceededViolation dnsRuleGroupLimitExceededViolation) {
        this.dnsRuleGroupLimitExceededViolation = dnsRuleGroupLimitExceededViolation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DnsRuleGroupPriorityConflictViolation")
    public DnsRuleGroupPriorityConflictViolation dnsRuleGroupPriorityConflictViolation;
    public ResourceViolation withDnsRuleGroupPriorityConflictViolation(DnsRuleGroupPriorityConflictViolation dnsRuleGroupPriorityConflictViolation) {
        this.dnsRuleGroupPriorityConflictViolation = dnsRuleGroupPriorityConflictViolation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NetworkFirewallBlackHoleRouteDetectedViolation")
    public NetworkFirewallBlackHoleRouteDetectedViolation networkFirewallBlackHoleRouteDetectedViolation;
    public ResourceViolation withNetworkFirewallBlackHoleRouteDetectedViolation(NetworkFirewallBlackHoleRouteDetectedViolation networkFirewallBlackHoleRouteDetectedViolation) {
        this.networkFirewallBlackHoleRouteDetectedViolation = networkFirewallBlackHoleRouteDetectedViolation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NetworkFirewallInternetTrafficNotInspectedViolation")
    public NetworkFirewallInternetTrafficNotInspectedViolation networkFirewallInternetTrafficNotInspectedViolation;
    public ResourceViolation withNetworkFirewallInternetTrafficNotInspectedViolation(NetworkFirewallInternetTrafficNotInspectedViolation networkFirewallInternetTrafficNotInspectedViolation) {
        this.networkFirewallInternetTrafficNotInspectedViolation = networkFirewallInternetTrafficNotInspectedViolation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NetworkFirewallInvalidRouteConfigurationViolation")
    public NetworkFirewallInvalidRouteConfigurationViolation networkFirewallInvalidRouteConfigurationViolation;
    public ResourceViolation withNetworkFirewallInvalidRouteConfigurationViolation(NetworkFirewallInvalidRouteConfigurationViolation networkFirewallInvalidRouteConfigurationViolation) {
        this.networkFirewallInvalidRouteConfigurationViolation = networkFirewallInvalidRouteConfigurationViolation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NetworkFirewallMissingExpectedRTViolation")
    public NetworkFirewallMissingExpectedRtViolation networkFirewallMissingExpectedRTViolation;
    public ResourceViolation withNetworkFirewallMissingExpectedRtViolation(NetworkFirewallMissingExpectedRtViolation networkFirewallMissingExpectedRTViolation) {
        this.networkFirewallMissingExpectedRTViolation = networkFirewallMissingExpectedRTViolation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NetworkFirewallMissingExpectedRoutesViolation")
    public NetworkFirewallMissingExpectedRoutesViolation networkFirewallMissingExpectedRoutesViolation;
    public ResourceViolation withNetworkFirewallMissingExpectedRoutesViolation(NetworkFirewallMissingExpectedRoutesViolation networkFirewallMissingExpectedRoutesViolation) {
        this.networkFirewallMissingExpectedRoutesViolation = networkFirewallMissingExpectedRoutesViolation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NetworkFirewallMissingFirewallViolation")
    public NetworkFirewallMissingFirewallViolation networkFirewallMissingFirewallViolation;
    public ResourceViolation withNetworkFirewallMissingFirewallViolation(NetworkFirewallMissingFirewallViolation networkFirewallMissingFirewallViolation) {
        this.networkFirewallMissingFirewallViolation = networkFirewallMissingFirewallViolation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NetworkFirewallMissingSubnetViolation")
    public NetworkFirewallMissingSubnetViolation networkFirewallMissingSubnetViolation;
    public ResourceViolation withNetworkFirewallMissingSubnetViolation(NetworkFirewallMissingSubnetViolation networkFirewallMissingSubnetViolation) {
        this.networkFirewallMissingSubnetViolation = networkFirewallMissingSubnetViolation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NetworkFirewallPolicyModifiedViolation")
    public NetworkFirewallPolicyModifiedViolation networkFirewallPolicyModifiedViolation;
    public ResourceViolation withNetworkFirewallPolicyModifiedViolation(NetworkFirewallPolicyModifiedViolation networkFirewallPolicyModifiedViolation) {
        this.networkFirewallPolicyModifiedViolation = networkFirewallPolicyModifiedViolation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NetworkFirewallUnexpectedFirewallRoutesViolation")
    public NetworkFirewallUnexpectedFirewallRoutesViolation networkFirewallUnexpectedFirewallRoutesViolation;
    public ResourceViolation withNetworkFirewallUnexpectedFirewallRoutesViolation(NetworkFirewallUnexpectedFirewallRoutesViolation networkFirewallUnexpectedFirewallRoutesViolation) {
        this.networkFirewallUnexpectedFirewallRoutesViolation = networkFirewallUnexpectedFirewallRoutesViolation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NetworkFirewallUnexpectedGatewayRoutesViolation")
    public NetworkFirewallUnexpectedGatewayRoutesViolation networkFirewallUnexpectedGatewayRoutesViolation;
    public ResourceViolation withNetworkFirewallUnexpectedGatewayRoutesViolation(NetworkFirewallUnexpectedGatewayRoutesViolation networkFirewallUnexpectedGatewayRoutesViolation) {
        this.networkFirewallUnexpectedGatewayRoutesViolation = networkFirewallUnexpectedGatewayRoutesViolation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PossibleRemediationActions")
    public PossibleRemediationActions possibleRemediationActions;
    public ResourceViolation withPossibleRemediationActions(PossibleRemediationActions possibleRemediationActions) {
        this.possibleRemediationActions = possibleRemediationActions;
        return this;
    }
}