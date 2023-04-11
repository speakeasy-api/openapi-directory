import { SpeakeasyBase } from "../../../internal/utils";
import { DestinationStateEnum } from "./destinationstateenum";
/**
 * Area within a facility where work can be performed.
 */
export declare class Destination extends SpeakeasyBase {
    /**
     * JSON document containing additional fixed properties regarding the destination
     */
    additionalFixedProperties?: string;
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
     * Human friendly name of the resource.
     */
    name: string;
    /**
     * Site ARN.
     */
    site: string;
    /**
     * State of the destination.
     */
    state: DestinationStateEnum;
    /**
     * Timestamp at which the resource was last updated.
     */
    updatedAt: Date;
}
