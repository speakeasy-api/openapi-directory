import { SpeakeasyBase } from "../../../internal/utils";
import { EndpointsResponse } from "./endpointsresponse";
/**
 * Success
 */
export declare class DeleteUserEndpointsResponse extends SpeakeasyBase {
    /**
     * Provides information about all the endpoints that are associated with a user ID.
     */
    endpointsResponse: EndpointsResponse;
}
