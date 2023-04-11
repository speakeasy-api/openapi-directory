import { SpeakeasyBase } from "../../../internal/utils";
import { BundleDataProp } from "./bundledataprop";
export declare class BundleData extends SpeakeasyBase {
    /**
     * Bundle category
     */
    category?: string;
    /**
     * Is bundle a fragment
     */
    fragment?: boolean;
    /**
     * Bundle ID
     */
    id?: number;
    /**
     * Bundle name
     */
    name?: string;
    props?: BundleDataProp[];
    /**
     * Bundle state value
     */
    state?: string;
    /**
     * Numeric raw bundle state value
     */
    stateRaw?: number;
    /**
     * Bundle symbolic name
     */
    symbolicName?: string;
    /**
     * Bundle version
     */
    version?: string;
}
