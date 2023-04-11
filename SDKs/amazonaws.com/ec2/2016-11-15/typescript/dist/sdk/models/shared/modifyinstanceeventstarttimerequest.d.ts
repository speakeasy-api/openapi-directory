import { SpeakeasyBase } from "../../../internal/utils";
export declare class ModifyInstanceEventStartTimeRequest extends SpeakeasyBase {
    dryRun?: boolean;
    instanceEventId: string;
    instanceId: string;
    notBefore: Date;
}
