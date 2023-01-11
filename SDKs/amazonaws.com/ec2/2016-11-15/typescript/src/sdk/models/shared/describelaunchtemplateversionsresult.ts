import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeLaunchTemplateVersionsResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  launchTemplateVersions?: Record<string, any>;

  @SpeakeasyMetadata()
  nextToken?: Record<string, any>;
}
