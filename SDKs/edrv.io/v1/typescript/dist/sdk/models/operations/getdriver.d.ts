import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetDriverRequest extends SpeakeasyBase {
    /**
     * The driver id that needs to be fetched
     */
    id: string;
    /**
     * Populate group
     */
    includeGroup?: boolean;
    /**
     * Populate organization
     */
    includeOrganization?: boolean;
    /**
     * Populate tokens
     */
    includeTokens?: boolean;
}
export declare class GetDriverResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
