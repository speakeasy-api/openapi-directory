import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ModifyInstanceMetadataOptionsResultInstanceMetadataOptions
/** 
 * The metadata options for the instance.
**/
export class ModifyInstanceMetadataOptionsResultInstanceMetadataOptions extends SpeakeasyBase {
  @SpeakeasyMetadata()
  httpEndpoint?: Record<string, any>;

  @SpeakeasyMetadata()
  httpProtocolIpv6?: Record<string, any>;

  @SpeakeasyMetadata()
  httpPutResponseHopLimit?: Record<string, any>;

  @SpeakeasyMetadata()
  httpTokens?: Record<string, any>;

  @SpeakeasyMetadata()
  state?: Record<string, any>;
}


export class ModifyInstanceMetadataOptionsResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  instanceId?: Record<string, any>;

  @SpeakeasyMetadata()
  instanceMetadataOptions?: ModifyInstanceMetadataOptionsResultInstanceMetadataOptions;
}
