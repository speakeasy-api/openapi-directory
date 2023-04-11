import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetLocationRequest extends SpeakeasyBase {
    /**
     * The location id that needs to be fetched
     */
    id: string;
    /**
     * Populate chargestations
     */
    includeChargestations?: boolean;
    /**
     * Populate organization
     */
    includeOrganization?: boolean;
}
export declare class GetLocationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
