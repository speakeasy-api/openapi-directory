import { SpeakeasyBase } from "../../../internal/utils";
import { DestinationStateEnum } from "./destinationstateenum";
/**
 * Success
 */
export declare class UpdateDestinationResponse extends SpeakeasyBase {
    /**
     * JSON document containing additional fixed properties regarding the destination
     */
    additionalFixedProperties?: string;
    /**
     * Destination ARN.
     */
    arn: string;
    /**
     * Filters access by the destination's identifier
     */
    id: string;
    /**
     * Human friendly name of the resource.
     */
    name: string;
    /**
     * State of the destination.
     */
    state: DestinationStateEnum;
    /**
     * Timestamp at which the resource was last updated.
     */
    updatedAt: Date;
}
