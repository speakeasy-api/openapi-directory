import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutConnectorsRequestBody extends SpeakeasyBase {
    /**
     * to enable  or disable connector (bank or provider)
     */
    hidden?: boolean;
}
export declare class PutConnectorsRequest extends SpeakeasyBase {
    requestBody?: PutConnectorsRequestBody;
    expand?: string;
}
export declare class PutConnectorsResponse extends SpeakeasyBase {
    /**
     * Successful PUT on Connector resource
     */
    connector?: shared.Connector;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
