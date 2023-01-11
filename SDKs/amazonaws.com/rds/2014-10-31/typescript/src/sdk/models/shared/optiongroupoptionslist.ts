import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OptionGroupOptionSettingsList } from "./optiongroupoptionsettingslist";
import { OptionGroupOptionVersionsList } from "./optiongroupoptionversionslist";



// OptionGroupOptionsList
/** 
 * Available option.
**/
export class OptionGroupOptionsList extends SpeakeasyBase {
  @SpeakeasyMetadata()
  defaultPort?: number;

  @SpeakeasyMetadata()
  description?: string;

  @SpeakeasyMetadata()
  engineName?: string;

  @SpeakeasyMetadata()
  majorEngineVersion?: string;

  @SpeakeasyMetadata()
  minimumRequiredMinorEngineVersion?: string;

  @SpeakeasyMetadata()
  name?: string;

  @SpeakeasyMetadata({ elemType: OptionGroupOptionSettingsList })
  optionGroupOptionSettings?: OptionGroupOptionSettingsList[];

  @SpeakeasyMetadata({ elemType: OptionGroupOptionVersionsList })
  optionGroupOptionVersions?: OptionGroupOptionVersionsList[];

  @SpeakeasyMetadata()
  optionsConflictsWith?: Record<string, any>[];

  @SpeakeasyMetadata()
  optionsDependedOn?: Record<string, any>[];

  @SpeakeasyMetadata()
  permanent?: boolean;

  @SpeakeasyMetadata()
  persistent?: boolean;

  @SpeakeasyMetadata()
  portRequired?: boolean;

  @SpeakeasyMetadata()
  requiresAutoMinorEngineVersionUpgrade?: boolean;

  @SpeakeasyMetadata()
  supportsOptionVersionDowngrade?: boolean;

  @SpeakeasyMetadata()
  vpcOnly?: boolean;
}
