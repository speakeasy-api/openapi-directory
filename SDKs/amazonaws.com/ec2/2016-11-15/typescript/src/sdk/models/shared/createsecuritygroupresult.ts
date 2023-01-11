import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateSecurityGroupResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  groupId?: Record<string, any>;

  @SpeakeasyMetadata()
  tags?: Record<string, any>;
}
