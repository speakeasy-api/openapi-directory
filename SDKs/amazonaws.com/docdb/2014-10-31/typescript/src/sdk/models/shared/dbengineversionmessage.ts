import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DbEngineVersionList } from "./dbengineversionlist";



// DbEngineVersionMessage
/** 
 * Represents the output of <a>DescribeDBEngineVersions</a>.
**/
export class DbEngineVersionMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: DbEngineVersionList })
  dbEngineVersions?: DbEngineVersionList[];

  @SpeakeasyMetadata()
  marker?: string;
}
