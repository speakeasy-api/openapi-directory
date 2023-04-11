import { SpeakeasyBase } from "../../../internal/utils";
import { Links } from "./links";
import { Location } from "./location";
import { Meta } from "./meta";
/**
 * Locations
 */
export declare class GetLocationsResponse extends SpeakeasyBase {
    data: Location[];
    /**
     * Links to navigate to previous or next pages through the API
     */
    links?: Links;
    /**
     * Response metadata
     */
    meta?: Meta;
    /**
     * Operation performed
     */
    operation: string;
    /**
     * Unified API resource name
     */
    resource: string;
    /**
     * Apideck ID of service provider
     */
    service: string;
    /**
     * HTTP Response Status
     */
    status: string;
    /**
     * HTTP Response Status Code
     */
    statusCode: number;
}
