import { SpeakeasyBase } from "../../../internal/utils";
import { CreateNegativeKeywordRequest } from "./createnegativekeywordrequest";
/**
 * A type that contains the fields for the bulk request to create negative keywords.
 */
export declare class BulkCreateNegativeKeywordRequest extends SpeakeasyBase {
    /**
     * This array is used to pass in multiple negative keywords for one or more ad groups that belong to a campaign that uses the Cost Per Click (CPC) funding model.
     */
    requests?: CreateNegativeKeywordRequest[];
}
