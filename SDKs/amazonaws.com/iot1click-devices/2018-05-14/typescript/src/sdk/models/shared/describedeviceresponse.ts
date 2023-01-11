import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DescribeDeviceResponseDeviceDescription
/** 
 * Device details.
**/
export class DescribeDeviceResponseDeviceDescription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Arn" })
  arn?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=Attributes" })
  attributes?: Record<string, string>;

  @SpeakeasyMetadata({ data: "json, name=DeviceId" })
  deviceId?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=Enabled" })
  enabled?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=RemainingLife" })
  remainingLife?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=Tags" })
  tags?: Record<string, string>;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: Record<string, any>;
}


export class DescribeDeviceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DeviceDescription" })
  deviceDescription?: DescribeDeviceResponseDeviceDescription;
}
