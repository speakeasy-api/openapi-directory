/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { DBInstanceList } from "./dbinstancelist";

/**
 * Represents the output of <a>DescribeDBInstances</a>.
 */
export class DBInstanceMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: DBInstanceList })
  dbInstances?: DBInstanceList[];

  @SpeakeasyMetadata()
  marker?: string;
}
