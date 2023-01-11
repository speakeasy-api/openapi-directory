import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BatchResultErrorEntryList
/** 
 * Gives a detailed description of the result of an action on each entry in the request.
**/
export class BatchResultErrorEntryList extends SpeakeasyBase {
  @SpeakeasyMetadata()
  code: string;

  @SpeakeasyMetadata()
  id: string;

  @SpeakeasyMetadata()
  message?: string;

  @SpeakeasyMetadata()
  senderFault: boolean;
}
