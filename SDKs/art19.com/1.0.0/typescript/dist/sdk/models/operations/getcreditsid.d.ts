import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetCreditsIdSecurity extends SpeakeasyBase {
    apiKey: string;
}
export declare class GetCreditsIdRequest extends SpeakeasyBase {
    /**
     * The ID of the credit resource to load.
     */
    id: string;
}
/**
 * Success
 */
export declare class GetCreditsId200ApplicationVndApiPlusJson extends SpeakeasyBase {
    /**
     * A credit links a specific person to a series, season, or episode in a specific role.
     *
     * @remarks
     *
     */
    data?: shared.Credit;
    /**
     * Links related to the retrieved resource
     */
    links?: shared.ResourceLink;
}
export declare class GetCreditsIdResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    getCreditsId200ApplicationVndApiPlusJsonObject?: GetCreditsId200ApplicationVndApiPlusJson;
}
