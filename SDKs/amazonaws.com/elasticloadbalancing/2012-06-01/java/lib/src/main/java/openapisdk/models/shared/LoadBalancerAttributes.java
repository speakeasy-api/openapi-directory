package openapisdk.models.shared;



/**
 * LoadBalancerAttributes
 * The attributes for a load balancer.
**/
public class LoadBalancerAttributes {
    public AccessLog accessLog;
    public LoadBalancerAttributes withAccessLog(AccessLog accessLog) {
        this.accessLog = accessLog;
        return this;
    }
    public AdditionalAttribute[] additionalAttributes;
    public LoadBalancerAttributes withAdditionalAttributes(AdditionalAttribute[] additionalAttributes) {
        this.additionalAttributes = additionalAttributes;
        return this;
    }
    public ConnectionDraining connectionDraining;
    public LoadBalancerAttributes withConnectionDraining(ConnectionDraining connectionDraining) {
        this.connectionDraining = connectionDraining;
        return this;
    }
    public ConnectionSettings connectionSettings;
    public LoadBalancerAttributes withConnectionSettings(ConnectionSettings connectionSettings) {
        this.connectionSettings = connectionSettings;
        return this;
    }
    public CrossZoneLoadBalancing crossZoneLoadBalancing;
    public LoadBalancerAttributes withCrossZoneLoadBalancing(CrossZoneLoadBalancing crossZoneLoadBalancing) {
        this.crossZoneLoadBalancing = crossZoneLoadBalancing;
        return this;
    }
}