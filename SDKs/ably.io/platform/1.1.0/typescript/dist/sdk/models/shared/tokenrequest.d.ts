import { SpeakeasyBase } from "../../../internal/utils";
export declare class TokenRequest extends SpeakeasyBase {
    capability: Record<string, any>;
    clientId?: string;
    keyName: string;
    nonce: string;
    timestamp: number;
}
