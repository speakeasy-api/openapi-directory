import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class StatusRequestBody extends SpeakeasyBase {
    /**
     * the endpoint to get the status for, to expressed as either IP address or URL
     */
    endpoint: string;
}
/**
 * Structure holding detailed information about the connection
 */
export declare class Status200ApplicationJSONLastHandshake extends SpeakeasyBase {
    /**
     * Agent name
     */
    agent?: string;
    chainId?: string;
    /**
     * Generation number
     */
    generation?: number;
    headId?: string;
    /**
     * Head number
     */
    headNum?: number;
    /**
     * Base58 encoded EOSIO public key
     */
    key?: string;
    lastIrreversibleBlockId?: string;
    /**
     * Last irreversible block number
     */
    lastIrreversibleBlockNum?: number;
    /**
     * Incremental value above a computed base
     */
    networkVersion?: number;
    nodeId?: string;
    /**
     * Operating system name
     */
    os?: string;
    /**
     * IP address or URL of the peer
     */
    p2pAddress?: string;
    /**
     * Base58 encoded EOSIO cryptographic signature
     */
    sig?: string;
    /**
     * Date/time string in the format YYYY-MM-DDTHH:MM:SS.sss
     */
    time?: string;
    token?: string;
}
/**
 * OK
 */
export declare class Status200ApplicationJSON extends SpeakeasyBase {
    /**
     * True if the peer is connecting, otherwise false
     */
    connecting?: boolean;
    /**
     * Structure holding detailed information about the connection
     */
    lastHandshake?: Status200ApplicationJSONLastHandshake;
    /**
     * The IP address or URL of the peer
     */
    peer?: string;
    /**
     * True if the peer is syncing, otherwise false
     */
    syncing?: boolean;
}
export declare class StatusResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    status200ApplicationJSONObject?: Status200ApplicationJSON;
}
