import { SpeakeasyBase } from "../../../internal/utils";
import { DataSourceToIndexFieldMapping } from "./datasourcetoindexfieldmapping";
import { SalesforceChatterFeedIncludeFilterTypeEnum } from "./salesforcechatterfeedincludefiltertypeenum";
/**
 * The configuration information for syncing a Salesforce chatter feed. The contents of the object comes from the Salesforce FeedItem table.
 */
export declare class SalesforceChatterFeedConfiguration extends SpeakeasyBase {
    documentDataFieldName: string;
    documentTitleFieldName?: string;
    fieldMappings?: DataSourceToIndexFieldMapping[];
    includeFilterTypes?: SalesforceChatterFeedIncludeFilterTypeEnum[];
}
