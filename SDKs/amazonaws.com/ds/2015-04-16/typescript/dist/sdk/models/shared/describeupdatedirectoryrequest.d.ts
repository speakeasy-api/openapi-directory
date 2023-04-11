import { SpeakeasyBase } from "../../../internal/utils";
import { UpdateTypeEnum } from "./updatetypeenum";
export declare class DescribeUpdateDirectoryRequest extends SpeakeasyBase {
    directoryId: string;
    nextToken?: string;
    regionName?: string;
    updateType: UpdateTypeEnum;
}
