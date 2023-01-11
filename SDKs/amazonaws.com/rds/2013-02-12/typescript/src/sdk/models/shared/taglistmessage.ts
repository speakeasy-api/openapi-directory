import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TagList } from "./taglist";



export class TagListMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: TagList })
  tagList?: TagList[];
}
