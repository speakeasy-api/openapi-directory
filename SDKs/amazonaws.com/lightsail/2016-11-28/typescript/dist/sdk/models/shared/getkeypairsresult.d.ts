import { SpeakeasyBase } from "../../../internal/utils";
import { KeyPair } from "./keypair";
/**
 * Success
 */
export declare class GetKeyPairsResult extends SpeakeasyBase {
    keyPairs?: KeyPair[];
    nextPageToken?: string;
}
