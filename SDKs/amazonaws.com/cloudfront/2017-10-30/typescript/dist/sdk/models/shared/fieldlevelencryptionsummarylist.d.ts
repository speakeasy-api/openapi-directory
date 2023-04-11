import { SpeakeasyBase } from "../../../internal/utils";
import { ContentTypeProfileConfig } from "./contenttypeprofileconfig";
import { QueryArgProfileConfig } from "./queryargprofileconfig";
/**
 * A summary of a field-level encryption item.
 */
export declare class FieldLevelEncryptionSummaryList extends SpeakeasyBase {
    comment?: string;
    contentTypeProfileConfig?: ContentTypeProfileConfig;
    id: string;
    lastModifiedTime: Date;
    queryArgProfileConfig?: QueryArgProfileConfig;
}
