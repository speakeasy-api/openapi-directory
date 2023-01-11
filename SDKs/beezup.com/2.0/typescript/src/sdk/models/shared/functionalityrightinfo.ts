import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// FunctionalityRightInfo
/** 
 * Describe the rights for a functionality
**/
export class FunctionalityRightInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=functionalityCode" })
  functionalityCode: string;

  @SpeakeasyMetadata({ data: "json, name=maxValueInterger" })
  maxValueInterger?: number;

  @SpeakeasyMetadata({ data: "json, name=unlimited" })
  unlimited?: boolean;
}
