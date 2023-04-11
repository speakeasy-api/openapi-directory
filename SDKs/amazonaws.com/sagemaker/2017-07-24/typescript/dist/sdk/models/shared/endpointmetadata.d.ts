import { SpeakeasyBase } from "../../../internal/utils";
import { EndpointStatusEnum } from "./endpointstatusenum";
/**
 * The metadata of the endpoint.
 */
export declare class EndpointMetadata extends SpeakeasyBase {
    endpointConfigName?: string;
    endpointName: string;
    endpointStatus?: EndpointStatusEnum;
    failureReason?: string;
}
