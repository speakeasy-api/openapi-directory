import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Success
 */
export declare class UpdateWorkerFleetResponse extends SpeakeasyBase {
    /**
     * JSON blob containing additional fixed properties regarding the worker fleet
     */
    additionalFixedProperties?: string;
    /**
     * Full ARN of the worker fleet.
     */
    arn: string;
    /**
     * Filters access by the worker fleet's identifier
     */
    id: string;
    /**
     * Human friendly name of the resource.
     */
    name: string;
    /**
     * Timestamp at which the resource was last updated.
     */
    updatedAt: Date;
}
