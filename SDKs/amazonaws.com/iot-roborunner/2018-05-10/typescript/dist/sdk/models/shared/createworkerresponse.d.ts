import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Success
 */
export declare class CreateWorkerResponse extends SpeakeasyBase {
    /**
     * Full ARN of the worker.
     */
    arn: string;
    /**
     * Timestamp at which the resource was created.
     */
    createdAt: Date;
    /**
     * Filters access by the workers identifier
     */
    id: string;
    /**
     * Site ARN.
     */
    site: string;
    /**
     * Timestamp at which the resource was last updated.
     */
    updatedAt: Date;
}
