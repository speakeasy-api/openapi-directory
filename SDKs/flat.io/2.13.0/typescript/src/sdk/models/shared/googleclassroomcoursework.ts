import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleClassroomCoursework
/** 
 * A coursework on Google Classroom
**/
export class GoogleClassroomCoursework extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alternateLink" })
  alternateLink?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: string;

  @SpeakeasyMetadata({ data: "json, name=topicId" })
  topicId?: string;
}
