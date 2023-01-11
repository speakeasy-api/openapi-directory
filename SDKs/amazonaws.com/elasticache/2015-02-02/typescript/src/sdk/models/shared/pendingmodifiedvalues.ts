import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AuthTokenUpdateStatusEnum } from "./authtokenupdatestatusenum";
import { PendingLogDeliveryConfiguration } from "./pendinglogdeliveryconfiguration";



// PendingModifiedValues
/** 
 * A group of settings that are applied to the cluster in the future, or that are currently being applied.
**/
export class PendingModifiedValues extends SpeakeasyBase {
  @SpeakeasyMetadata()
  authTokenStatus?: AuthTokenUpdateStatusEnum;

  @SpeakeasyMetadata()
  cacheNodeIdsToRemove?: Record<string, any>[];

  @SpeakeasyMetadata()
  cacheNodeType?: string;

  @SpeakeasyMetadata()
  engineVersion?: string;

  @SpeakeasyMetadata({ elemType: PendingLogDeliveryConfiguration })
  logDeliveryConfigurations?: PendingLogDeliveryConfiguration[];

  @SpeakeasyMetadata()
  numCacheNodes?: number;
}
