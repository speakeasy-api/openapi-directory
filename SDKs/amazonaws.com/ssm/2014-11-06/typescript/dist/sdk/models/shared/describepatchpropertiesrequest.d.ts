import { SpeakeasyBase } from "../../../internal/utils";
import { OperatingSystemEnum } from "./operatingsystemenum";
import { PatchPropertyEnum } from "./patchpropertyenum";
import { PatchSetEnum } from "./patchsetenum";
export declare class DescribePatchPropertiesRequest extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
    operatingSystem: OperatingSystemEnum;
    patchSet?: PatchSetEnum;
    property: PatchPropertyEnum;
}
