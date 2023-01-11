import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TerminateContract
/** 
 * The contract termination info
**/
export class TerminateContract extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contractTerminationReason" })
  contractTerminationReason?: string;

  @SpeakeasyMetadata({ data: "json, name=contractTerminationReasonType" })
  contractTerminationReasonType: number;
}
