import { SpeakeasyBase } from "../../../internal/utils";
import { OpsItemDataValue } from "./opsitemdatavalue";
import { OpsItemNotification } from "./opsitemnotification";
import { OpsItemStatusEnum } from "./opsitemstatusenum";
import { RelatedOpsItem } from "./relatedopsitem";
export declare class UpdateOpsItemRequest extends SpeakeasyBase {
    actualEndTime?: Date;
    actualStartTime?: Date;
    category?: string;
    description?: string;
    notifications?: OpsItemNotification[];
    operationalData?: Record<string, OpsItemDataValue>;
    operationalDataToDelete?: string[];
    opsItemArn?: string;
    opsItemId: string;
    plannedEndTime?: Date;
    plannedStartTime?: Date;
    priority?: number;
    relatedOpsItems?: RelatedOpsItem[];
    severity?: string;
    status?: OpsItemStatusEnum;
    title?: string;
}
