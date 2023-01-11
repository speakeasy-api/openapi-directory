import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LmsNameEnum } from "./lmsnameenum";



// LtiCredentialsCreation
/** 
 * Creation of a couple of LTI 1.x OAuth credentials
**/
export class LtiCredentialsCreation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=lms" })
  lms: LmsNameEnum;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}
