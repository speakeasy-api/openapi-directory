import { SpeakeasyBase } from "../../../internal/utils";
export declare class ConnectionMessage extends SpeakeasyBase {
    /**
     * The connection id
     */
    connectionId?: string;
    /**
     * Client generated unique id to link request with response (like json rpc)
     */
    id?: number;
    /**
     * The operation type
     */
    op?: string;
}
