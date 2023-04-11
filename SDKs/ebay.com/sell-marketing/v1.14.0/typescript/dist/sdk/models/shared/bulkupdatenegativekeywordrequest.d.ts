import { SpeakeasyBase } from "../../../internal/utils";
import { UpdateNegativeKeywordIdRequest } from "./updatenegativekeywordidrequest";
/**
 * A type that defines the fields for the <b>BulkUpdateNegativeKeyword</b> request.
 */
export declare class BulkUpdateNegativeKeywordRequest extends SpeakeasyBase {
    /**
     * An array to update the statuses of one or more existing negative keywords.
     */
    requests?: UpdateNegativeKeywordIdRequest[];
}
