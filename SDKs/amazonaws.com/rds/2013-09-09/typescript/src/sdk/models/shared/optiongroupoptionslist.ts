import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OptionGroupOptionSettingsList } from "./optiongroupoptionsettingslist";



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

  @SpeakeasyMetadata()
  optionsDependedOn?: Record<string, any>[];

  @SpeakeasyMetadata()
  permanent?: boolean;

  @SpeakeasyMetadata()
  persistent?: boolean;

  @SpeakeasyMetadata()
  portRequired?: boolean;
}
