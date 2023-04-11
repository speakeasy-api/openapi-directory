import { SpeakeasyBase } from "../../../internal/utils";
import { CreateKeywordRequest } from "./createkeywordrequest";
/**
 * A type that contains the fields for the bulk request to create keywords.
 */
export declare class BulkCreateKeywordRequest extends SpeakeasyBase {
    /**
     * This array is used to pass in multiple keywords for one or more ad groups that belong to a campaign that uses the Cost Per Click (CPC) funding model. Up to {max value} keywords can be created with one call.
     */
    requests?: CreateKeywordRequest[];
}
