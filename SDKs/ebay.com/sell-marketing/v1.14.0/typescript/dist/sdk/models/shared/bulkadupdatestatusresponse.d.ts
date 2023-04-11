import { SpeakeasyBase } from "../../../internal/utils";
import { AdUpdateStatusResponse } from "./adupdatestatusresponse";
/**
 * A type that defines the fields for the updated ad status in the bulk response.
 */
export declare class BulkAdUpdateStatusResponse extends SpeakeasyBase {
    /**
     * An array of processed ad listings in bulk.
     */
    responses?: AdUpdateStatusResponse[];
}
