import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetTokenRequest extends SpeakeasyBase {
    /**
     * The token id that needs to be fetched
     */
    id: string;
    /**
     * Populate driver
     */
    includeDriver?: boolean;
    /**
     * Populate organization
     */
    includeOrganization?: boolean;
}
export declare class GetTokenResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
