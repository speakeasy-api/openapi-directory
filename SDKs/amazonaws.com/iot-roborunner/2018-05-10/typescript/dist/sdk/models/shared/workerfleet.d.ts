import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A collection of workers organized within a facility.
 */
export declare class WorkerFleet extends SpeakeasyBase {
    /**
     * JSON blob containing additional fixed properties regarding the worker fleet
     */
    additionalFixedProperties?: string;
    /**
     * Full ARN of the worker fleet.
     */
    arn: string;
    /**
     * Timestamp at which the resource was created.
     */
    createdAt: Date;
    /**
     * Filters access by the worker fleet's identifier
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
     * Timestamp at which the resource was last updated.
     */
    updatedAt: Date;
}
