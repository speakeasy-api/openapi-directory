import { SpeakeasyBase } from "../../../internal/utils";
import { AdResponse } from "./adresponse";
/**
 * This type defines the fields for the create ads in bulk response.
 */
export declare class BulkAdResponse extends SpeakeasyBase {
    /**
     * This array displays the list of ads that were successfully created. For any ads that were not created successfully, the errors array may provide more detail about why creation of one or more ads failed.
     */
    responses?: AdResponse[];
}
