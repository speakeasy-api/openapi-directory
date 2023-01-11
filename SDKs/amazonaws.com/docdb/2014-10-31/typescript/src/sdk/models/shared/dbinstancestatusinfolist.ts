import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DbInstanceStatusInfoList
/** 
 * Provides a list of status information for an instance.
**/
export class DbInstanceStatusInfoList extends SpeakeasyBase {
  @SpeakeasyMetadata()
  message?: string;

  @SpeakeasyMetadata()
  normal?: boolean;

  @SpeakeasyMetadata()
  status?: string;

  @SpeakeasyMetadata()
  statusType?: string;
}
