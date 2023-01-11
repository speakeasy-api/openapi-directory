import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DbInstanceList } from "./dbinstancelist";



export class DbInstanceMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: DbInstanceList })
  dbInstances?: DbInstanceList[];

  @SpeakeasyMetadata()
  marker?: string;
}
