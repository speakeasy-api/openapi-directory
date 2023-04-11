import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetOrganizationRequest extends SpeakeasyBase {
    /**
     * ID of organization that needs to be fetched
     */
    id: string;
    /**
     * Populate locations
     */
    includeLocations?: boolean;
}
export declare class GetOrganizationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
