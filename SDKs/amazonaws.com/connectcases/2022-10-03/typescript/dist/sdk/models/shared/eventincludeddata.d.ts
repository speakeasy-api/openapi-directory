import { SpeakeasyBase } from "../../../internal/utils";
import { CaseEventIncludedData } from "./caseeventincludeddata";
import { RelatedItemEventIncludedData } from "./relateditemeventincludeddata";
/**
 * Details of what case and related item data is published through the case event stream.
 */
export declare class EventIncludedData extends SpeakeasyBase {
    caseData?: CaseEventIncludedData;
    relatedItemData?: RelatedItemEventIncludedData;
}
