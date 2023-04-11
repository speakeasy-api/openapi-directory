import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const GetServerHealthServerList: readonly ["http://localhost:8080"];
/**
 * OK
 */
export declare class GetServerHealth200ApplicationJSON extends SpeakeasyBase {
    dependencies?: shared.ServiceDependency[];
    name: string;
    /**
     * The Connect server's version
     */
    version: string;
}
export declare class GetServerHealthResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    getServerHealth200ApplicationJSONObject?: GetServerHealth200ApplicationJSON;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
