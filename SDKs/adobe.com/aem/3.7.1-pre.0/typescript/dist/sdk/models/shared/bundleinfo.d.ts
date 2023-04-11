import { SpeakeasyBase } from "../../../internal/utils";
import { BundleData } from "./bundledata";
/**
 * Retrieved bundle info
 */
export declare class BundleInfo extends SpeakeasyBase {
    data?: BundleData[];
    s?: number[];
    /**
     * Status description of all bundles
     */
    status?: string;
}
