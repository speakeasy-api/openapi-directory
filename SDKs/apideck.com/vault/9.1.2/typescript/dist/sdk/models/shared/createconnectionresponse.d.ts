import { SpeakeasyBase } from "../../../internal/utils";
import { Connection } from "./connection";
/**
 * Connection created
 */
export declare class CreateConnectionResponse extends SpeakeasyBase {
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
