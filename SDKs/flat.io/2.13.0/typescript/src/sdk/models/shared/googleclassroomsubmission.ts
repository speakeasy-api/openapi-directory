import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleClassroomSubmission
/** 
 * A coursework submission on Google Classroom
**/
export class GoogleClassroomSubmission extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alternateLink" })
  alternateLink?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: string;
}
