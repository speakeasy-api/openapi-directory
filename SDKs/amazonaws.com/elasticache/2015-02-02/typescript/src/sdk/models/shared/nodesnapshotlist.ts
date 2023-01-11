import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NodeGroupConfiguration } from "./nodegroupconfiguration";



// NodeSnapshotList
/** 
 * Represents an individual cache node in a snapshot of a cluster.
**/
export class NodeSnapshotList extends SpeakeasyBase {
  @SpeakeasyMetadata()
  cacheClusterId?: string;

  @SpeakeasyMetadata()
  cacheNodeCreateTime?: Date;

  @SpeakeasyMetadata()
  cacheNodeId?: string;

  @SpeakeasyMetadata()
  cacheSize?: string;

  @SpeakeasyMetadata()
  nodeGroupConfiguration?: NodeGroupConfiguration;

  @SpeakeasyMetadata()
  nodeGroupId?: string;

  @SpeakeasyMetadata()
  snapshotCreateTime?: Date;
}
