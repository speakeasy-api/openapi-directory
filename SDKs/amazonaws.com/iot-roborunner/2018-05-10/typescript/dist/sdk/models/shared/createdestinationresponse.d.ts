import { SpeakeasyBase } from "../../../internal/utils";
import { DestinationStateEnum } from "./destinationstateenum";
/**
 * Success
 */
export declare class CreateDestinationResponse extends SpeakeasyBase {
    /**
     * Destination ARN.
     */
    arn: string;
    /**
     * Timestamp at which the resource was created.
     */
    createdAt: Date;
    /**
     * Filters access by the destination's identifier
     */
    id: string;
    /**
     * State of the destination.
     */
    state: DestinationStateEnum;
    /**
     * Timestamp at which the resource was last updated.
     */
    updatedAt: Date;
}
