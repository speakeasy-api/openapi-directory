import { SpeakeasyBase } from "../../../internal/utils";
import { SalesforceDataTransferApiEnum } from "./salesforcedatatransferapienum";
/**
 *  The connector metadata specific to Salesforce.
 */
export declare class SalesforceMetadata extends SpeakeasyBase {
    dataTransferApis?: SalesforceDataTransferApiEnum[];
    oAuthScopes?: string[];
}
