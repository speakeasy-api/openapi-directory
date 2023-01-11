import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DbEngineVersionList } from "./dbengineversionlist";



// DbEngineVersionMessage
/** 
 *  Contains the result of a successful invocation of the <code>DescribeDBEngineVersions</code> action. 
**/
export class DbEngineVersionMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: DbEngineVersionList })
  dbEngineVersions?: DbEngineVersionList[];

  @SpeakeasyMetadata()
  marker?: string;
}
