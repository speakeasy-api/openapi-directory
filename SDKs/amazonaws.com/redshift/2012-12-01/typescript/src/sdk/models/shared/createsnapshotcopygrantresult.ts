/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { SnapshotCopyGrant } from "./snapshotcopygrant";

/**
 * Success
 */
export class CreateSnapshotCopyGrantResult extends SpeakeasyBase {
  /**
   * <p>The snapshot copy grant that grants Amazon Redshift permission to encrypt copied snapshots with the specified encrypted symmetric key from Amazon Web Services KMS in the destination region.</p> <p> For more information about managing snapshot copy grants, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-db-encryption.html">Amazon Redshift Database Encryption</a> in the <i>Amazon Redshift Cluster Management Guide</i>. </p>
   */
  @SpeakeasyMetadata()
  snapshotCopyGrant?: SnapshotCopyGrant;
}
