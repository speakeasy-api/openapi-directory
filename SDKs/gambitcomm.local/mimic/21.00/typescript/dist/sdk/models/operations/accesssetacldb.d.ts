import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AccessSetAcldbRequest extends SpeakeasyBase {
    /**
     * Database name to use
     */
    databaseName: string;
}
export declare class AccessSetAcldbResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    accessSetAcldb200ApplicationJSONString?: string;
}
