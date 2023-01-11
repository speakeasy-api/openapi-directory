package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * RulesSourceList
 * <p>Stateful inspection criteria for a domain list rule group. </p> <p>For HTTPS traffic, domain filtering is SNI-based. It uses the server name indicator extension of the TLS handshake.</p> <p>By default, Network Firewall domain list inspection only includes traffic coming from the VPC where you deploy the firewall. To inspect traffic from IP addresses outside of the deployment VPC, you set the <code>HOME_NET</code> rule variable to include the CIDR range of the deployment VPC plus the other CIDR ranges. For more information, see <a>RuleVariables</a> in this guide and <a href="https://docs.aws.amazon.com/network-firewall/latest/developerguide/stateful-rule-groups-domain-names.html">Stateful domain list rule groups in AWS Network Firewall</a> in the <i>Network Firewall Developer Guide</i> </p>
**/
public class RulesSourceList {
    @JsonProperty("GeneratedRulesType")
    public GeneratedRulesTypeEnum generatedRulesType;
    public RulesSourceList withGeneratedRulesType(GeneratedRulesTypeEnum generatedRulesType) {
        this.generatedRulesType = generatedRulesType;
        return this;
    }
    @JsonProperty("TargetTypes")
    public TargetTypeEnum[] targetTypes;
    public RulesSourceList withTargetTypes(TargetTypeEnum[] targetTypes) {
        this.targetTypes = targetTypes;
        return this;
    }
    @JsonProperty("Targets")
    public String[] targets;
    public RulesSourceList withTargets(String[] targets) {
        this.targets = targets;
        return this;
    }
}