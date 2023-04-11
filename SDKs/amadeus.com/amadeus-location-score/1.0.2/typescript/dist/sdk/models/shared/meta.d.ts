import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Links related to the returned object(s)
 */
export declare class MetaLinks extends SpeakeasyBase {
    /**
     * Link to the same page.
     */
    self?: string;
}
/**
 * Meta information about the returned object(s) in "data"
 */
export declare class Meta extends SpeakeasyBase {
    /**
     * Total number of object(s) retrieved
     */
    count?: number;
    /**
     * Links related to the returned object(s)
     */
    links?: MetaLinks;
}
