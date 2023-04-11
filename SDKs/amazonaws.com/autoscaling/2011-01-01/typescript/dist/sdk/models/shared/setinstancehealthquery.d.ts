import { SpeakeasyBase } from "../../../internal/utils";
export declare class SetInstanceHealthQuery extends SpeakeasyBase {
    healthStatus: string;
    instanceId: string;
    shouldRespectGracePeriod?: boolean;
}
