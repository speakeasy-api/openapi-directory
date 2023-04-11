import { SpeakeasyBase } from "../../../internal/utils";
export declare class StopInstancesRequest extends SpeakeasyBase {
    dryRun?: boolean;
    force?: boolean;
    hibernate?: boolean;
    instanceIds: string[];
}
