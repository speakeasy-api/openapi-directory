import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ChangeUserColumnNameRequest
/** 
 * The message request for the change user column name
**/
export class ChangeUserColumnNameRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=userColumName" })
  userColumName: string;
}
