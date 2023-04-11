import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Properties of the worker that are provided by the vendor FMS.
 */
export declare class VendorProperties extends SpeakeasyBase {
    /**
     * JSON blob containing unstructured vendor properties that are fixed and won't change during regular operation.
     */
    vendorAdditionalFixedProperties?: string;
    /**
     * JSON blob containing unstructured vendor properties that are transient and may change during regular operation.
     */
    vendorAdditionalTransientProperties?: string;
    /**
     * The worker ID defined by the vendor FMS.
     */
    vendorWorkerId: string;
    /**
     * The worker IP address defined by the vendor FMS.
     */
    vendorWorkerIpAddress?: string;
}
