import { SpeakeasyBase } from "../../../internal/utils";
import { BoundingBox } from "./boundingbox";
export declare enum CheckBoxFieldTypeEnum {
    Check = "check"
}
export declare class CheckBoxField extends SpeakeasyBase {
    bbox: BoundingBox;
    eval?: any;
    name: string;
    page: number;
    required?: boolean;
    type: CheckBoxFieldTypeEnum;
}
