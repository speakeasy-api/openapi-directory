import { SpeakeasyBase } from "../../../internal/utils";
import { Connection } from "./connection";
/**
 * Connections
 */
export declare class GetConnectionsResponse extends SpeakeasyBase {
    data: Connection[];
    /**
     * HTTP Response Status
     */
    status: string;
    /**
     * HTTP Response Status Code
     */
    statusCode: number;
}
