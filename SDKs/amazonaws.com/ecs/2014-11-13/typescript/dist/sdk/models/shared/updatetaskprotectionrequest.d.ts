import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateTaskProtectionRequest extends SpeakeasyBase {
    cluster: string;
    expiresInMinutes?: number;
    protectionEnabled: boolean;
    tasks: string[];
}
