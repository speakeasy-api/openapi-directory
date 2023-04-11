import { SpeakeasyBase } from "../../../internal/utils";
import { GroupingTypeEnum } from "./groupingtypeenum";
import { Tag } from "./tag";
export declare class CreateApplicationRequest extends SpeakeasyBase {
    autoConfigEnabled?: boolean;
    autoCreate?: boolean;
    cweMonitorEnabled?: boolean;
    groupingType?: GroupingTypeEnum;
    opsCenterEnabled?: boolean;
    opsItemSNSTopicArn?: string;
    resourceGroupName?: string;
    tags?: Tag[];
}
