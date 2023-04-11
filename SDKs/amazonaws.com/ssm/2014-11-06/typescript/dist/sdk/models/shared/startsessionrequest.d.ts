import { SpeakeasyBase } from "../../../internal/utils";
export declare class StartSessionRequest extends SpeakeasyBase {
    documentName?: string;
    parameters?: Record<string, string[]>;
    reason?: string;
    target: string;
}
