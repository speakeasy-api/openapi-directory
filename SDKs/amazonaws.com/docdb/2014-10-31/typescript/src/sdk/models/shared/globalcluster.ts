import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GlobalClusterMemberList } from "./globalclustermemberlist";



// GlobalCluster
/** 
 * A data type representing an Amazon DocumentDB global cluster.
**/
export class GlobalCluster extends SpeakeasyBase {
  @SpeakeasyMetadata()
  databaseName?: string;

  @SpeakeasyMetadata()
  deletionProtection?: boolean;

  @SpeakeasyMetadata()
  engine?: string;

  @SpeakeasyMetadata()
  engineVersion?: string;

  @SpeakeasyMetadata()
  globalClusterArn?: string;

  @SpeakeasyMetadata()
  globalClusterIdentifier?: string;

  @SpeakeasyMetadata({ elemType: GlobalClusterMemberList })
  globalClusterMembers?: GlobalClusterMemberList[];

  @SpeakeasyMetadata()
  globalClusterResourceId?: string;

  @SpeakeasyMetadata()
  status?: string;

  @SpeakeasyMetadata()
  storageEncrypted?: boolean;
}
