import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DescribeNetworkInterfaceAttributeResultAttachment
/** 
 * The attachment (if any) of the network interface.
**/
export class DescribeNetworkInterfaceAttributeResultAttachment extends SpeakeasyBase {
  @SpeakeasyMetadata()
  attachTime?: Record<string, any>;

  @SpeakeasyMetadata()
  attachmentId?: Record<string, any>;

  @SpeakeasyMetadata()
  deleteOnTermination?: Record<string, any>;

  @SpeakeasyMetadata()
  deviceIndex?: Record<string, any>;

  @SpeakeasyMetadata()
  instanceId?: Record<string, any>;

  @SpeakeasyMetadata()
  instanceOwnerId?: Record<string, any>;

  @SpeakeasyMetadata()
  networkCardIndex?: Record<string, any>;

  @SpeakeasyMetadata()
  status?: Record<string, any>;
}


// DescribeNetworkInterfaceAttributeResultDescription
/** 
 * The description of the network interface.
**/
export class DescribeNetworkInterfaceAttributeResultDescription extends SpeakeasyBase {
  @SpeakeasyMetadata()
  value?: Record<string, any>;
}


// DescribeNetworkInterfaceAttributeResultSourceDestCheck
/** 
 * Indicates whether source/destination checking is enabled.
**/
export class DescribeNetworkInterfaceAttributeResultSourceDestCheck extends SpeakeasyBase {
  @SpeakeasyMetadata()
  value?: Record<string, any>;
}


// DescribeNetworkInterfaceAttributeResult
/** 
 * Contains the output of DescribeNetworkInterfaceAttribute.
**/
export class DescribeNetworkInterfaceAttributeResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  attachment?: DescribeNetworkInterfaceAttributeResultAttachment;

  @SpeakeasyMetadata()
  description?: DescribeNetworkInterfaceAttributeResultDescription;

  @SpeakeasyMetadata()
  groups?: Record<string, any>;

  @SpeakeasyMetadata()
  networkInterfaceId?: Record<string, any>;

  @SpeakeasyMetadata()
  sourceDestCheck?: DescribeNetworkInterfaceAttributeResultSourceDestCheck;
}
