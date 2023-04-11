import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetConnectorRequest extends SpeakeasyBase {
    /**
     * ID of connector that needs to be fetched
     */
    id: string;
    /**
     * Populate evse
     */
    includeEvse?: boolean;
    /**
     * Populate organization
     */
    includeOrganization?: boolean;
    /**
     * Populate rate
     */
    includeRate?: boolean;
}
export declare class GetConnectorResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
