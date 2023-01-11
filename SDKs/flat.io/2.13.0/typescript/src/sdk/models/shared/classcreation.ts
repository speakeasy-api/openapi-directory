import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ClassCreation
/** 
 * Creation of a classroom
**/
export class ClassCreation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=section" })
  section?: string;
}
