import { SpeakeasyBase } from "../../../internal/utils";
import { UpdateKeywordByKeywordIdRequest } from "./updatekeywordbykeywordidrequest";
/**
 * A type that defines the fields for the <b>BulkUpdateKeyword</b> request.
 */
export declare class BulkUpdateKeywordRequest extends SpeakeasyBase {
    /**
     * Use this array to update the bid values and/or statuses of one or more existing keywords.
     */
    requests?: UpdateKeywordByKeywordIdRequest[];
}
