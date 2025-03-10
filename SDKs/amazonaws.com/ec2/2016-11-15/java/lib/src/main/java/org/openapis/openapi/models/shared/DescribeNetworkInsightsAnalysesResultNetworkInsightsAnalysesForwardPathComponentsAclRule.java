/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;



/**
 * DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesForwardPathComponentsAclRule - The network ACL rule.
 */
public class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesForwardPathComponentsAclRule {
    
    public String cidr;

    public DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesForwardPathComponentsAclRule withCidr(String cidr) {
        this.cidr = cidr;
        return this;
    }
    
    
    public Boolean egress;

    public DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesForwardPathComponentsAclRule withEgress(Boolean egress) {
        this.egress = egress;
        return this;
    }
    
    
    public DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesForwardPathComponentsAclRulePortRange portRange;

    public DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesForwardPathComponentsAclRule withPortRange(DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesForwardPathComponentsAclRulePortRange portRange) {
        this.portRange = portRange;
        return this;
    }
    
    
    public String protocol;

    public DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesForwardPathComponentsAclRule withProtocol(String protocol) {
        this.protocol = protocol;
        return this;
    }
    
    
    public String ruleAction;

    public DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesForwardPathComponentsAclRule withRuleAction(String ruleAction) {
        this.ruleAction = ruleAction;
        return this;
    }
    
    
    public Long ruleNumber;

    public DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesForwardPathComponentsAclRule withRuleNumber(Long ruleNumber) {
        this.ruleNumber = ruleNumber;
        return this;
    }
    
    public DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesForwardPathComponentsAclRule(){}
}
