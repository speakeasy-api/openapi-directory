import { SpeakeasyBase } from "../../../internal/utils";
import { Program } from "./program";
/**
 * The base response type of the <b>getOptedInPrograms</b> method.
 */
export declare class Programs extends SpeakeasyBase {
    /**
     * An array of seller programs that the seller's account is opted in to.
     */
    programs?: Program[];
}
