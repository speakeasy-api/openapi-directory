import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DescribeVpcAttributeResultEnableDnsHostnames
/** 
 * Indicates whether the instances launched in the VPC get DNS hostnames. If this attribute is <code>true</code>, instances in the VPC get DNS hostnames; otherwise, they do not.
**/
export class DescribeVpcAttributeResultEnableDnsHostnames extends SpeakeasyBase {
  @SpeakeasyMetadata()
  value?: Record<string, any>;
}


// DescribeVpcAttributeResultEnableDnsSupport
/** 
 * Indicates whether DNS resolution is enabled for the VPC. If this attribute is <code>true</code>, the Amazon DNS server resolves DNS hostnames for your instances to their corresponding IP addresses; otherwise, it does not.
**/
export class DescribeVpcAttributeResultEnableDnsSupport extends SpeakeasyBase {
  @SpeakeasyMetadata()
  value?: Record<string, any>;
}


export class DescribeVpcAttributeResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  enableDnsHostnames?: DescribeVpcAttributeResultEnableDnsHostnames;

  @SpeakeasyMetadata()
  enableDnsSupport?: DescribeVpcAttributeResultEnableDnsSupport;

  @SpeakeasyMetadata()
  vpcId?: Record<string, any>;
}
