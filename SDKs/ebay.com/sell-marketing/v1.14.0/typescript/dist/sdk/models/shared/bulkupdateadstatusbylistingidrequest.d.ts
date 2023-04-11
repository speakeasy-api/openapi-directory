import { SpeakeasyBase } from "../../../internal/utils";
import { UpdateAdStatusByListingIdRequest } from "./updateadstatusbylistingidrequest";
/**
 * A type that defines the fields for the <b>BulkUpdateAdStatusByListingId</b> request.
 */
export declare class BulkUpdateAdStatusByListingIdRequest extends SpeakeasyBase {
    /**
     * An array of listing IDs and bid percentages.
     */
    requests?: UpdateAdStatusByListingIdRequest[];
}
