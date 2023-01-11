import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CharacterSet } from "./characterset";
import { SupportedCharacterSetsList } from "./supportedcharactersetslist";
import { SupportedTimezonesList } from "./supportedtimezoneslist";
import { ValidUpgradeTargetList } from "./validupgradetargetlist";



// DbEngineVersionList
/** 
 *  This data type is used as a response element in the action <code>DescribeDBEngineVersions</code>. 
**/
export class DbEngineVersionList extends SpeakeasyBase {
  @SpeakeasyMetadata()
  dbEngineDescription?: string;

  @SpeakeasyMetadata()
  dbEngineVersionDescription?: string;

  @SpeakeasyMetadata()
  dbParameterGroupFamily?: string;

  @SpeakeasyMetadata()
  defaultCharacterSet?: CharacterSet;

  @SpeakeasyMetadata()
  engine?: string;

  @SpeakeasyMetadata()
  engineVersion?: string;

  @SpeakeasyMetadata()
  exportableLogTypes?: string[];

  @SpeakeasyMetadata()
  status?: string;

  @SpeakeasyMetadata({ elemType: SupportedCharacterSetsList })
  supportedCharacterSets?: SupportedCharacterSetsList[];

  @SpeakeasyMetadata()
  supportedEngineModes?: string[];

  @SpeakeasyMetadata()
  supportedFeatureNames?: string[];

  @SpeakeasyMetadata({ elemType: SupportedCharacterSetsList })
  supportedNcharCharacterSets?: SupportedCharacterSetsList[];

  @SpeakeasyMetadata({ elemType: SupportedTimezonesList })
  supportedTimezones?: SupportedTimezonesList[];

  @SpeakeasyMetadata()
  supportsGlobalDatabases?: boolean;

  @SpeakeasyMetadata()
  supportsLogExportsToCloudwatchLogs?: boolean;

  @SpeakeasyMetadata()
  supportsParallelQuery?: boolean;

  @SpeakeasyMetadata()
  supportsReadReplica?: boolean;

  @SpeakeasyMetadata({ elemType: ValidUpgradeTargetList })
  validUpgradeTarget?: ValidUpgradeTargetList[];
}
