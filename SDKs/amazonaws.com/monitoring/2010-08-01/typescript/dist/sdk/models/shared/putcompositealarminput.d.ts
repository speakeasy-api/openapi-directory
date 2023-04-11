import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
export declare class PutCompositeAlarmInput extends SpeakeasyBase {
    actionsEnabled?: boolean;
    actionsSuppressor?: string;
    actionsSuppressorExtensionPeriod?: number;
    actionsSuppressorWaitPeriod?: number;
    alarmActions?: string[];
    alarmDescription?: string;
    alarmName: string;
    alarmRule: string;
    insufficientDataActions?: string[];
    okActions?: string[];
    tags?: Tag[];
}
