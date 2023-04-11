import { SpeakeasyBase } from "../../../internal/utils";
import { UpdateAdStatusRequest } from "./updateadstatusrequest";
/**
 * A type that defines the fields for the <b>BulkUpdateAdStatus</b> request.
 */
export declare class BulkUpdateAdStatusRequest extends SpeakeasyBase {
    /**
     * An array of listing IDs and bid percentages.
     */
    requests?: UpdateAdStatusRequest[];
}
