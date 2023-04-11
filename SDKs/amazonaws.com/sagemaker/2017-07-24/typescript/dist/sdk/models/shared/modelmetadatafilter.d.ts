import { SpeakeasyBase } from "../../../internal/utils";
import { ModelMetadataFilterTypeEnum } from "./modelmetadatafiltertypeenum";
/**
 * Part of the search expression. You can specify the name and value (domain, task, framework, framework version, task, and model).
 */
export declare class ModelMetadataFilter extends SpeakeasyBase {
    name: ModelMetadataFilterTypeEnum;
    value: string;
}
