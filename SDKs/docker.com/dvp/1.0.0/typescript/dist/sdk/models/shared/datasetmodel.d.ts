import { SpeakeasyBase } from "../../../internal/utils";
import { DatasetTypeEnum } from "./datasettypeenum";
import { DataviewTypeEnum } from "./dataviewtypeenum";
import { TimespanTypeEnum } from "./timespantypeenum";
export declare class DatasetModel extends SpeakeasyBase {
    name?: DatasetTypeEnum;
    timespans?: TimespanTypeEnum[];
    views?: DataviewTypeEnum[];
}
