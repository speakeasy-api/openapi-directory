import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Success
 */
export declare class CreateWorkerFleetResponse extends SpeakeasyBase {
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
     * Timestamp at which the resource was last updated.
     */
    updatedAt: Date;
}
