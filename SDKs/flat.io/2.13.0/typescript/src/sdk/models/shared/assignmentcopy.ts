import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AssignmentCopy
/** 
 * Assignment copy operation
**/
export class AssignmentCopy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assignment" })
  assignment?: string;

  @SpeakeasyMetadata({ data: "json, name=classroom" })
  classroom?: string;

  @SpeakeasyMetadata({ data: "json, name=scheduledDate" })
  scheduledDate?: Date;
}
