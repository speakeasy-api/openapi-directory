import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes a scheduled event for an instance.
**/
export declare class ModifyInstanceEventStartTimeResultEvent extends SpeakeasyBase {
    code?: Record<string, any>;
    description?: Record<string, any>;
    instanceEventId?: Record<string, any>;
    notAfter?: Record<string, any>;
    notBefore?: Record<string, any>;
    notBeforeDeadline?: Record<string, any>;
}
export declare class ModifyInstanceEventStartTimeResult extends SpeakeasyBase {
    event?: ModifyInstanceEventStartTimeResultEvent;
}
