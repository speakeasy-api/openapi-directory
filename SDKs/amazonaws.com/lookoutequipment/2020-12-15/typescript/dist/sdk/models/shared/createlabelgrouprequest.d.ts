import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
export declare class CreateLabelGroupRequest extends SpeakeasyBase {
    clientToken: string;
    faultCodes?: string[];
    labelGroupName: string;
    tags?: Tag[];
}
