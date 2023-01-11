import { SpeakeasyBase } from "../../../internal/utils";
export declare class SignedTokenRequest extends SpeakeasyBase {
    capability: Record<string, any>;
    clientId?: string;
    keyName: string;
    mac: string;
    nonce: string;
    timestamp: number;
}
