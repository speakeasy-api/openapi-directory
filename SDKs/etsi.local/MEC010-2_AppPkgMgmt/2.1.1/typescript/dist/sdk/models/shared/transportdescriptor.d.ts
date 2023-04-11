import { SpeakeasyBase } from "../../../internal/utils";
export declare class TransportDescriptor extends SpeakeasyBase {
    /**
     * The name of the protocol used. Shall be set to HTTP for a REST API.
     */
    protocol: string;
    /**
     * See MEC011
     */
    security: any;
    type: string;
    /**
     * The version of the protocol used.
     */
    version: string;
}
