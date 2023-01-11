import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CreateVpcEndpointServiceConfigurationResultServiceConfigurationPrivateDnsNameConfiguration
/** 
 * Information about the endpoint service private DNS name configuration.
**/
export class CreateVpcEndpointServiceConfigurationResultServiceConfigurationPrivateDnsNameConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata()
  name?: Record<string, any>;

  @SpeakeasyMetadata()
  state?: Record<string, any>;

  @SpeakeasyMetadata()
  type?: Record<string, any>;

  @SpeakeasyMetadata()
  value?: Record<string, any>;
}


// CreateVpcEndpointServiceConfigurationResultServiceConfiguration
/** 
 * Information about the service configuration.
**/
export class CreateVpcEndpointServiceConfigurationResultServiceConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata()
  acceptanceRequired?: Record<string, any>;

  @SpeakeasyMetadata()
  availabilityZones?: Record<string, any>;

  @SpeakeasyMetadata()
  baseEndpointDnsNames?: Record<string, any>;

  @SpeakeasyMetadata()
  gatewayLoadBalancerArns?: Record<string, any>;

  @SpeakeasyMetadata()
  managesVpcEndpoints?: Record<string, any>;

  @SpeakeasyMetadata()
  networkLoadBalancerArns?: Record<string, any>;

  @SpeakeasyMetadata()
  privateDnsName?: Record<string, any>;

  @SpeakeasyMetadata()
  privateDnsNameConfiguration?: CreateVpcEndpointServiceConfigurationResultServiceConfigurationPrivateDnsNameConfiguration;

  @SpeakeasyMetadata()
  serviceId?: Record<string, any>;

  @SpeakeasyMetadata()
  serviceName?: Record<string, any>;

  @SpeakeasyMetadata()
  serviceState?: Record<string, any>;

  @SpeakeasyMetadata()
  serviceType?: Record<string, any>;

  @SpeakeasyMetadata()
  tags?: Record<string, any>;
}


export class CreateVpcEndpointServiceConfigurationResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  clientToken?: Record<string, any>;

  @SpeakeasyMetadata()
  serviceConfiguration?: CreateVpcEndpointServiceConfigurationResultServiceConfiguration;
}
