import { SpeakeasyBase } from "../../../internal/utils";
import { InstanceEventWindowTimeRangeRequest } from "./instanceeventwindowtimerangerequest";
export declare class ModifyInstanceEventWindowRequest extends SpeakeasyBase {
    cronExpression?: string;
    dryRun?: boolean;
    instanceEventWindowId: string;
    name?: string;
    timeRanges?: InstanceEventWindowTimeRangeRequest[];
}
