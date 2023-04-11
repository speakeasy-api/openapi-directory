import { SpeakeasyBase } from "../../../internal/utils";
import { Definition } from "./definition";
/**
 * Type that defines the headers for the dimension keys and metrics returned in the report.
 */
export declare class Header extends SpeakeasyBase {
    /**
     * A list of the dimension or metric keys returned in the report. The values for each are is returned in the associated key fields.
     */
    dimensionKeys?: Definition[];
    /**
     * The list of metrics returned in the report. The values for each are is returned in the associated key fields.
     */
    metrics?: Definition[];
}
