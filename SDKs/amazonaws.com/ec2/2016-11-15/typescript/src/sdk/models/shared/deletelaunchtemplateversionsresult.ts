import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteLaunchTemplateVersionsResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  successfullyDeletedLaunchTemplateVersions?: Record<string, any>;

  @SpeakeasyMetadata()
  unsuccessfullyDeletedLaunchTemplateVersions?: Record<string, any>;
}
