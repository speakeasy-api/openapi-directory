import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LmsNameEnum } from "./lmsnameenum";



// LtiCredentials
/** 
 * A couple of LTI 1.x OAuth credentials
**/
export class LtiCredentials extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=consumerKey" })
  consumerKey?: string;

  @SpeakeasyMetadata({ data: "json, name=consumerSecret" })
  consumerSecret?: string;

  @SpeakeasyMetadata({ data: "json, name=creationDate" })
  creationDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=creator" })
  creator?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=lastUsage" })
  lastUsage?: Date;

  @SpeakeasyMetadata({ data: "json, name=lms" })
  lms?: LmsNameEnum;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=organization" })
  organization?: string;
}
