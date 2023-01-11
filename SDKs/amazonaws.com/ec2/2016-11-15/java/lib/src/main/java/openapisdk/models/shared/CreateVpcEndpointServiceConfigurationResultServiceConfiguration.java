package openapisdk.models.shared;



/**
 * CreateVpcEndpointServiceConfigurationResultServiceConfiguration
 * Information about the service configuration.
**/
public class CreateVpcEndpointServiceConfigurationResultServiceConfiguration {
    public java.util.Map<String, Object> acceptanceRequired;
    public CreateVpcEndpointServiceConfigurationResultServiceConfiguration withAcceptanceRequired(java.util.Map<String, Object> acceptanceRequired) {
        this.acceptanceRequired = acceptanceRequired;
        return this;
    }
    public java.util.Map<String, Object> availabilityZones;
    public CreateVpcEndpointServiceConfigurationResultServiceConfiguration withAvailabilityZones(java.util.Map<String, Object> availabilityZones) {
        this.availabilityZones = availabilityZones;
        return this;
    }
    public java.util.Map<String, Object> baseEndpointDnsNames;
    public CreateVpcEndpointServiceConfigurationResultServiceConfiguration withBaseEndpointDnsNames(java.util.Map<String, Object> baseEndpointDnsNames) {
        this.baseEndpointDnsNames = baseEndpointDnsNames;
        return this;
    }
    public java.util.Map<String, Object> gatewayLoadBalancerArns;
    public CreateVpcEndpointServiceConfigurationResultServiceConfiguration withGatewayLoadBalancerArns(java.util.Map<String, Object> gatewayLoadBalancerArns) {
        this.gatewayLoadBalancerArns = gatewayLoadBalancerArns;
        return this;
    }
    public java.util.Map<String, Object> managesVpcEndpoints;
    public CreateVpcEndpointServiceConfigurationResultServiceConfiguration withManagesVpcEndpoints(java.util.Map<String, Object> managesVpcEndpoints) {
        this.managesVpcEndpoints = managesVpcEndpoints;
        return this;
    }
    public java.util.Map<String, Object> networkLoadBalancerArns;
    public CreateVpcEndpointServiceConfigurationResultServiceConfiguration withNetworkLoadBalancerArns(java.util.Map<String, Object> networkLoadBalancerArns) {
        this.networkLoadBalancerArns = networkLoadBalancerArns;
        return this;
    }
    public java.util.Map<String, Object> privateDnsName;
    public CreateVpcEndpointServiceConfigurationResultServiceConfiguration withPrivateDnsName(java.util.Map<String, Object> privateDnsName) {
        this.privateDnsName = privateDnsName;
        return this;
    }
    public CreateVpcEndpointServiceConfigurationResultServiceConfigurationPrivateDnsNameConfiguration privateDnsNameConfiguration;
    public CreateVpcEndpointServiceConfigurationResultServiceConfiguration withPrivateDnsNameConfiguration(CreateVpcEndpointServiceConfigurationResultServiceConfigurationPrivateDnsNameConfiguration privateDnsNameConfiguration) {
        this.privateDnsNameConfiguration = privateDnsNameConfiguration;
        return this;
    }
    public java.util.Map<String, Object> serviceId;
    public CreateVpcEndpointServiceConfigurationResultServiceConfiguration withServiceId(java.util.Map<String, Object> serviceId) {
        this.serviceId = serviceId;
        return this;
    }
    public java.util.Map<String, Object> serviceName;
    public CreateVpcEndpointServiceConfigurationResultServiceConfiguration withServiceName(java.util.Map<String, Object> serviceName) {
        this.serviceName = serviceName;
        return this;
    }
    public java.util.Map<String, Object> serviceState;
    public CreateVpcEndpointServiceConfigurationResultServiceConfiguration withServiceState(java.util.Map<String, Object> serviceState) {
        this.serviceState = serviceState;
        return this;
    }
    public java.util.Map<String, Object> serviceType;
    public CreateVpcEndpointServiceConfigurationResultServiceConfiguration withServiceType(java.util.Map<String, Object> serviceType) {
        this.serviceType = serviceType;
        return this;
    }
    public java.util.Map<String, Object> tags;
    public CreateVpcEndpointServiceConfigurationResultServiceConfiguration withTags(java.util.Map<String, Object> tags) {
        this.tags = tags;
        return this;
    }
}