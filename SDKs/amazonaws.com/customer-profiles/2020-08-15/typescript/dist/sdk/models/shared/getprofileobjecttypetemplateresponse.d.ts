import { SpeakeasyBase } from "../../../internal/utils";
import { ObjectTypeField } from "./objecttypefield";
import { ObjectTypeKey } from "./objecttypekey";
/**
 * Success
 */
export declare class GetProfileObjectTypeTemplateResponse extends SpeakeasyBase {
    allowProfileCreation?: boolean;
    fields?: Record<string, ObjectTypeField>;
    keys?: Record<string, ObjectTypeKey[]>;
    sourceLastUpdatedTimestampFormat?: string;
    sourceName?: string;
    sourceObject?: string;
    templateId?: string;
}
