import { SpeakeasyBase } from "../../../internal/utils";
import { ParameterInEnum } from "./parameterinenum";
import { LovLink3 } from "./lovlink3";
export declare class LinkParameter3 extends SpeakeasyBase {
    description?: string;
    in?: ParameterInEnum;
    label?: string;
    lovLink?: LovLink3;
    lovRequired?: boolean;
    pattern?: string;
    properties?: any;
    required?: boolean;
    schema?: string;
    value?: Record<string, any>;
}
