import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ClientApiCanDeleteRequest extends SpeakeasyBase {
    id: number;
    xAuthKey: string;
    xAuthSecret: string;
}
export declare class ClientApiCanDeleteResponse extends SpeakeasyBase {
    body?: Uint8Array;
    /**
     * OK
     */
    clientApiCanDelete200ApplicationJSONBoolean?: boolean;
    /**
     * OK
     */
    clientApiCanDelete200TextJSONBoolean?: boolean;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
