import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ModifyAddressAttributeResultAddressPtrRecordUpdate
/** 
 * The updated PTR record for the IP address.
**/
export class ModifyAddressAttributeResultAddressPtrRecordUpdate extends SpeakeasyBase {
  @SpeakeasyMetadata()
  reason?: Record<string, any>;

  @SpeakeasyMetadata()
  status?: Record<string, any>;

  @SpeakeasyMetadata()
  value?: Record<string, any>;
}


// ModifyAddressAttributeResultAddress
/** 
 * Information about the Elastic IP address.
**/
export class ModifyAddressAttributeResultAddress extends SpeakeasyBase {
  @SpeakeasyMetadata()
  allocationId?: Record<string, any>;

  @SpeakeasyMetadata()
  ptrRecord?: Record<string, any>;

  @SpeakeasyMetadata()
  ptrRecordUpdate?: ModifyAddressAttributeResultAddressPtrRecordUpdate;

  @SpeakeasyMetadata()
  publicIp?: Record<string, any>;
}


export class ModifyAddressAttributeResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  address?: ModifyAddressAttributeResultAddress;
}
