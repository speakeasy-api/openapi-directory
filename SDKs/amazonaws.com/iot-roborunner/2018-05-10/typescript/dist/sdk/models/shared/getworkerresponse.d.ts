import { SpeakeasyBase } from "../../../internal/utils";
import { Orientation } from "./orientation";
import { PositionCoordinates } from "./positioncoordinates";
import { VendorProperties } from "./vendorproperties";
/**
 * Success
 */
export declare class GetWorkerResponse extends SpeakeasyBase {
    /**
     * JSON blob containing unstructured worker properties that are fixed and won't change during regular operation.
     */
    additionalFixedProperties?: string;
    /**
     * JSON blob containing unstructured worker properties that are transient and may change during regular operation.
     */
    additionalTransientProperties?: string;
    /**
     * Full ARN of the worker.
     */
    arn: string;
    /**
     * Timestamp at which the resource was created.
     */
    createdAt: Date;
    /**
     * Full ARN of the worker fleet.
     */
    fleet: string;
    /**
     * Filters access by the workers identifier
     */
    id: string;
    /**
     * Human friendly name of the resource.
     */
    name: string;
    /**
     * Worker orientation measured in units clockwise from north.
     */
    orientation?: Orientation;
    /**
     * Supported coordinates for worker position.
     */
    position?: PositionCoordinates;
    /**
     * Site ARN.
     */
    site: string;
    /**
     * Timestamp at which the resource was last updated.
     */
    updatedAt: Date;
    /**
     * Properties of the worker that are provided by the vendor FMS.
     */
    vendorProperties?: VendorProperties;
}
