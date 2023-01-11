import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DescribeVolumeAttributeResultAutoEnableIo
/** 
 * The state of <code>autoEnableIO</code> attribute.
**/
export class DescribeVolumeAttributeResultAutoEnableIo extends SpeakeasyBase {
  @SpeakeasyMetadata()
  value?: Record<string, any>;
}


export class DescribeVolumeAttributeResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  autoEnableIO?: DescribeVolumeAttributeResultAutoEnableIo;

  @SpeakeasyMetadata()
  productCodes?: Record<string, any>;

  @SpeakeasyMetadata()
  volumeId?: Record<string, any>;
}
