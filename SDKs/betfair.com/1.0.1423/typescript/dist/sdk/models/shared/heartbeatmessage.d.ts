import { SpeakeasyBase } from "../../../internal/utils";
export declare class HeartbeatMessage extends SpeakeasyBase {
    /**
     * Client generated unique id to link request with response (like json rpc)
     */
    id?: number;
    /**
     * The operation type
     */
    op?: string;
}
