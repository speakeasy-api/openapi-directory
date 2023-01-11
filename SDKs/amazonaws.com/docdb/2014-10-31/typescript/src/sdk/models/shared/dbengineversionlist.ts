import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ValidUpgradeTargetList } from "./validupgradetargetlist";



// DbEngineVersionList
/** 
 *  Detailed information about an engine version. 
**/
export class DbEngineVersionList extends SpeakeasyBase {
  @SpeakeasyMetadata()
  dbEngineDescription?: string;

  @SpeakeasyMetadata()
  dbEngineVersionDescription?: string;

  @SpeakeasyMetadata()
  dbParameterGroupFamily?: string;

  @SpeakeasyMetadata()
  engine?: string;

  @SpeakeasyMetadata()
  engineVersion?: string;

  @SpeakeasyMetadata()
  exportableLogTypes?: string[];

  @SpeakeasyMetadata()
  supportsLogExportsToCloudwatchLogs?: boolean;

  @SpeakeasyMetadata({ elemType: ValidUpgradeTargetList })
  validUpgradeTarget?: ValidUpgradeTargetList[];
}
