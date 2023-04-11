import { SpeakeasyBase } from "../../../internal/utils";
import { ObjectTypeField } from "./objecttypefield";
import { ObjectTypeKey } from "./objecttypekey";
/**
 * Success
 */
export declare class GetProfileObjectTypeResponse extends SpeakeasyBase {
    allowProfileCreation?: boolean;
    createdAt?: Date;
    description: string;
    encryptionKey?: string;
    expirationDays?: number;
    fields?: Record<string, ObjectTypeField>;
    keys?: Record<string, ObjectTypeKey[]>;
    lastUpdatedAt?: Date;
    objectTypeName: string;
    sourceLastUpdatedTimestampFormat?: string;
    tags?: Record<string, string>;
    templateId?: string;
}
