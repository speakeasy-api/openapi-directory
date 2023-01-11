import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetCapacityReservationUsageResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  availableInstanceCount?: Record<string, any>;

  @SpeakeasyMetadata()
  capacityReservationId?: Record<string, any>;

  @SpeakeasyMetadata()
  instanceType?: Record<string, any>;

  @SpeakeasyMetadata()
  instanceUsages?: Record<string, any>;

  @SpeakeasyMetadata()
  nextToken?: Record<string, any>;

  @SpeakeasyMetadata()
  state?: Record<string, any>;

  @SpeakeasyMetadata()
  totalInstanceCount?: Record<string, any>;
}
