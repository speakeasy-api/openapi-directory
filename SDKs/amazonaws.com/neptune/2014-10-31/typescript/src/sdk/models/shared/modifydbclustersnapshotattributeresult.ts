/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { DBClusterSnapshotAttributesResult } from "./dbclustersnapshotattributesresult";

/**
 * Success
 */
export class ModifyDBClusterSnapshotAttributeResult extends SpeakeasyBase {
  /**
   * <p>Contains the results of a successful call to the <a>DescribeDBClusterSnapshotAttributes</a> API action.</p> <p>Manual DB cluster snapshot attributes are used to authorize other Amazon accounts to copy or restore a manual DB cluster snapshot. For more information, see the <a>ModifyDBClusterSnapshotAttribute</a> API action.</p>
   */
  @SpeakeasyMetadata()
  dbClusterSnapshotAttributesResult?: DBClusterSnapshotAttributesResult;
}
