package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RuleVariables
 * Settings that are available for use in the rules in the <a>RuleGroup</a> where this is defined. 
**/
public class RuleVariables {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IPSets")
    public java.util.Map<String, IpSet> ipSets;
    public RuleVariables withIpSets(java.util.Map<String, IpSet> ipSets) {
        this.ipSets = ipSets;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PortSets")
    public java.util.Map<String, PortSet> portSets;
    public RuleVariables withPortSets(java.util.Map<String, PortSet> portSets) {
        this.portSets = portSets;
        return this;
    }
}