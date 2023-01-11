import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeLaunchTemplatesResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  launchTemplates?: Record<string, any>;

  @SpeakeasyMetadata()
  nextToken?: Record<string, any>;
}
