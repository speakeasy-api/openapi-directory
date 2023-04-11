import { SpeakeasyBase } from "../../../internal/utils";
import { Prediction } from "./prediction";
/**
 * The class assigned to a Page object detected in an input document. Contains information regarding the predicted type/class of a document's page and the page number that the Page object was detected on.
 */
export declare class PageClassification extends SpeakeasyBase {
    pageNumber: Prediction[];
    pageType: Prediction[];
}
