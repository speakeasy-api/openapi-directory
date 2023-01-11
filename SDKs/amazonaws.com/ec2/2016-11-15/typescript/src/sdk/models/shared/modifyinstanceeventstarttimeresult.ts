import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ModifyInstanceEventStartTimeResultEvent
/** 
 * Describes a scheduled event for an instance.
**/
export class ModifyInstanceEventStartTimeResultEvent extends SpeakeasyBase {
  @SpeakeasyMetadata()
  code?: Record<string, any>;

  @SpeakeasyMetadata()
  description?: Record<string, any>;

  @SpeakeasyMetadata()
  instanceEventId?: Record<string, any>;

  @SpeakeasyMetadata()
  notAfter?: Record<string, any>;

  @SpeakeasyMetadata()
  notBefore?: Record<string, any>;

  @SpeakeasyMetadata()
  notBeforeDeadline?: Record<string, any>;
}


export class ModifyInstanceEventStartTimeResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  event?: ModifyInstanceEventStartTimeResultEvent;
}
