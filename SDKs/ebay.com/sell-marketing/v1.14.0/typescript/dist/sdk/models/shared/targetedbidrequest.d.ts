import { SpeakeasyBase } from "../../../internal/utils";
import { KeywordRequest } from "./keywordrequest";
/**
 * A type that defines the targeted bid.
 */
export declare class TargetedBidRequest extends SpeakeasyBase {
    /**
     * A list of keywords in the paginated collection. <br /><br /><b>Maximum number of keywords: </b>500
     */
    keywords?: KeywordRequest[];
}
