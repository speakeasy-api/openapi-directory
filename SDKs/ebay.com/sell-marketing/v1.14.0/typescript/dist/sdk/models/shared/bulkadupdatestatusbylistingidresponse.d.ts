import { SpeakeasyBase } from "../../../internal/utils";
import { AdUpdateStatusByListingIdResponse } from "./adupdatestatusbylistingidresponse";
/**
 * A type that defines the fields for the updated ad status in the bulk response.
 */
export declare class BulkAdUpdateStatusByListingIdResponse extends SpeakeasyBase {
    /**
     * An array of processed ad listings in bulk.
     */
    responses?: AdUpdateStatusByListingIdResponse[];
}
