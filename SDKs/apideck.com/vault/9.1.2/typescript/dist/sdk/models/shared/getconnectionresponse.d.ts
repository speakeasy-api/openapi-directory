import { SpeakeasyBase } from "../../../internal/utils";
import { Connection } from "./connection";
/**
 * Connection
 */
export declare class GetConnectionResponse extends SpeakeasyBase {
    data: Connection;
    /**
     * HTTP Response Status
     */
    status: string;
    /**
     * HTTP Response Status Code
     */
    statusCode: number;
}
