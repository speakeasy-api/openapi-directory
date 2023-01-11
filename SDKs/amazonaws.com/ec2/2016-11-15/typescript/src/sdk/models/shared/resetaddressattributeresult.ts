import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ResetAddressAttributeResultAddressPtrRecordUpdate
/** 
 * The updated PTR record for the IP address.
**/
export class ResetAddressAttributeResultAddressPtrRecordUpdate extends SpeakeasyBase {
  @SpeakeasyMetadata()
  reason?: Record<string, any>;

  @SpeakeasyMetadata()
  status?: Record<string, any>;

  @SpeakeasyMetadata()
  value?: Record<string, any>;
}


// ResetAddressAttributeResultAddress
/** 
 * Information about the IP address.
**/
export class ResetAddressAttributeResultAddress extends SpeakeasyBase {
  @SpeakeasyMetadata()
  allocationId?: Record<string, any>;

  @SpeakeasyMetadata()
  ptrRecord?: Record<string, any>;

  @SpeakeasyMetadata()
  ptrRecordUpdate?: ResetAddressAttributeResultAddressPtrRecordUpdate;

  @SpeakeasyMetadata()
  publicIp?: Record<string, any>;
}


export class ResetAddressAttributeResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  address?: ResetAddressAttributeResultAddress;
}
