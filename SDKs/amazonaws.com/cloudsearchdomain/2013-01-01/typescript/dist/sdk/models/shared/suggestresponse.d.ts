import { SpeakeasyBase } from "../../../internal/utils";
import { SuggestModel } from "./suggestmodel";
import { SuggestStatus } from "./suggeststatus";
/**
 * Contains the response to a <code>Suggest</code> request.
 */
export declare class SuggestResponse extends SpeakeasyBase {
    status?: SuggestStatus;
    suggest?: SuggestModel;
}
