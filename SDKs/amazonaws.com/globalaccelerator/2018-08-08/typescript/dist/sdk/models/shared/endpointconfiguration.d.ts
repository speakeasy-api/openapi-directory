import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A complex type for endpoints. A resource must be valid and active when you add it as an endpoint.
**/
export declare class EndpointConfiguration extends SpeakeasyBase {
    clientIPPreservationEnabled?: boolean;
    endpointId?: string;
    weight?: number;
}
