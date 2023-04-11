import { SpeakeasyBase } from "../../../internal/utils";
import { SalesforceDataTransferApiEnum } from "./salesforcedatatransferapienum";
/**
 *  The properties that are applied when Salesforce is being used as a source.
 */
export declare class SalesforceSourceProperties extends SpeakeasyBase {
    dataTransferApi?: SalesforceDataTransferApiEnum;
    enableDynamicFieldUpdate?: boolean;
    includeDeletedRecords?: boolean;
    object: string;
}
