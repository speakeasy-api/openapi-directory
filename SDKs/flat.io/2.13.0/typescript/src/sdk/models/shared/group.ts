import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GroupTypeEnum } from "./grouptypeenum";



// Group
/** 
 * A group of users
**/
export class Group extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=creationDate" })
  creationDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=organization" })
  organization?: string;

  @SpeakeasyMetadata({ data: "json, name=readOnly" })
  readOnly?: boolean;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: GroupTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=usersCount" })
  usersCount?: number;
}
