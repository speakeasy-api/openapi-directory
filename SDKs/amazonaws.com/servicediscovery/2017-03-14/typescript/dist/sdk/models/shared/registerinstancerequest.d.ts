import { SpeakeasyBase } from "../../../internal/utils";
export declare class RegisterInstanceRequest extends SpeakeasyBase {
    attributes: Record<string, string>;
    creatorRequestId?: string;
    instanceId: string;
    serviceId: string;
}
