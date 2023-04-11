import { SpeakeasyBase } from "../../../internal/utils";
import { Connection } from "./connection";
/**
 * Connection updated
 */
export declare class UpdateConnectionResponse extends SpeakeasyBase {
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
