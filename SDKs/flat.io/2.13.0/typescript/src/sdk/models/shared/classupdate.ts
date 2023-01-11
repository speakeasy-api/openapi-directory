import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ClassUpdate
/** 
 * Update of a classroom
**/
export class ClassUpdate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=section" })
  section?: string;
}
