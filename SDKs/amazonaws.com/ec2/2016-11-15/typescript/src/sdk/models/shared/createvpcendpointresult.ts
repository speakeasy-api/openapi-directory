import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CreateVpcEndpointResultVpcEndpointLastError
/** 
 * The last error that occurred for VPC endpoint.
**/
export class CreateVpcEndpointResultVpcEndpointLastError extends SpeakeasyBase {
  @SpeakeasyMetadata()
  code?: Record<string, any>;

  @SpeakeasyMetadata()
  message?: Record<string, any>;
}


// CreateVpcEndpointResultVpcEndpoint
/** 
 * Information about the endpoint.
**/
export class CreateVpcEndpointResultVpcEndpoint extends SpeakeasyBase {
  @SpeakeasyMetadata()
  creationTimestamp?: Record<string, any>;

  @SpeakeasyMetadata()
  dnsEntries?: Record<string, any>;

  @SpeakeasyMetadata()
  groups?: Record<string, any>;

  @SpeakeasyMetadata()
  lastError?: CreateVpcEndpointResultVpcEndpointLastError;

  @SpeakeasyMetadata()
  networkInterfaceIds?: Record<string, any>;

  @SpeakeasyMetadata()
  ownerId?: Record<string, any>;

  @SpeakeasyMetadata()
  policyDocument?: Record<string, any>;

  @SpeakeasyMetadata()
  privateDnsEnabled?: Record<string, any>;

  @SpeakeasyMetadata()
  requesterManaged?: Record<string, any>;

  @SpeakeasyMetadata()
  routeTableIds?: Record<string, any>;

  @SpeakeasyMetadata()
  serviceName?: Record<string, any>;

  @SpeakeasyMetadata()
  state?: Record<string, any>;

  @SpeakeasyMetadata()
  subnetIds?: Record<string, any>;

  @SpeakeasyMetadata()
  tags?: Record<string, any>;

  @SpeakeasyMetadata()
  vpcEndpointId?: Record<string, any>;

  @SpeakeasyMetadata()
  vpcEndpointType?: Record<string, any>;

  @SpeakeasyMetadata()
  vpcId?: Record<string, any>;
}


// CreateVpcEndpointResult
/** 
 * Contains the output of CreateVpcEndpoint.
**/
export class CreateVpcEndpointResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  clientToken?: Record<string, any>;

  @SpeakeasyMetadata()
  vpcEndpoint?: CreateVpcEndpointResultVpcEndpoint;
}
