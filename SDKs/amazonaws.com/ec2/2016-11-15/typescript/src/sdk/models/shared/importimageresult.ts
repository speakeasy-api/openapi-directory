import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ImportImageResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  architecture?: Record<string, any>;

  @SpeakeasyMetadata()
  description?: Record<string, any>;

  @SpeakeasyMetadata()
  encrypted?: Record<string, any>;

  @SpeakeasyMetadata()
  hypervisor?: Record<string, any>;

  @SpeakeasyMetadata()
  imageId?: Record<string, any>;

  @SpeakeasyMetadata()
  importTaskId?: Record<string, any>;

  @SpeakeasyMetadata()
  kmsKeyId?: Record<string, any>;

  @SpeakeasyMetadata()
  licenseSpecifications?: Record<string, any>;

  @SpeakeasyMetadata()
  licenseType?: Record<string, any>;

  @SpeakeasyMetadata()
  platform?: Record<string, any>;

  @SpeakeasyMetadata()
  progress?: Record<string, any>;

  @SpeakeasyMetadata()
  snapshotDetails?: Record<string, any>;

  @SpeakeasyMetadata()
  status?: Record<string, any>;

  @SpeakeasyMetadata()
  statusMessage?: Record<string, any>;

  @SpeakeasyMetadata()
  tags?: Record<string, any>;

  @SpeakeasyMetadata()
  usageOperation?: Record<string, any>;
}
