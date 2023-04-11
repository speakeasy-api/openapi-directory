import { SpeakeasyBase } from "../../../internal/utils";
import { Extraction } from "./extraction";
import { PageClassification } from "./pageclassification";
/**
 * Contains the detections for each page analyzed through the Analyze Lending API.
 */
export declare class LendingResult extends SpeakeasyBase {
    extractions?: Extraction[];
    page?: number;
    pageClassification?: PageClassification;
}
