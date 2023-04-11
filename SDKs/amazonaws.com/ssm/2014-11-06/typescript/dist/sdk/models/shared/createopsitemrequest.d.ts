import { SpeakeasyBase } from "../../../internal/utils";
import { OpsItemDataValue } from "./opsitemdatavalue";
import { OpsItemNotification } from "./opsitemnotification";
import { RelatedOpsItem } from "./relatedopsitem";
import { Tag } from "./tag";
export declare class CreateOpsItemRequest extends SpeakeasyBase {
    accountId?: string;
    actualEndTime?: Date;
    actualStartTime?: Date;
    category?: string;
    description: string;
    notifications?: OpsItemNotification[];
    operationalData?: Record<string, OpsItemDataValue>;
    opsItemType?: string;
    plannedEndTime?: Date;
    plannedStartTime?: Date;
    priority?: number;
    relatedOpsItems?: RelatedOpsItem[];
    severity?: string;
    source: string;
    tags?: Tag[];
    title: string;
}
