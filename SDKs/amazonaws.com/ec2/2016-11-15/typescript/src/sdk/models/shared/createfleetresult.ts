import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateFleetResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  errors?: Record<string, any>;

  @SpeakeasyMetadata()
  fleetId?: Record<string, any>;

  @SpeakeasyMetadata()
  instances?: Record<string, any>;
}
