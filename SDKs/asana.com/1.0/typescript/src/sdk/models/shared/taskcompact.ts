import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TaskCompact
/** 
 * The *task* is the basic object around which many operations in Asana are centered.
**/
export class TaskCompact extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gid" })
  gid?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=resource_type" })
  resourceType?: string;
}
