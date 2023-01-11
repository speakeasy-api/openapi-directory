import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DbEngineVersionList } from "./dbengineversionlist";



export class DbEngineVersionMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: DbEngineVersionList })
  dbEngineVersions?: DbEngineVersionList[];

  @SpeakeasyMetadata()
  marker?: string;
}
