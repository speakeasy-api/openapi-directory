import { SpeakeasyBase } from "../../../internal/utils";
import { TypeDefinitionFormatEnum } from "./typedefinitionformatenum";
/**
 * Describes a type.
 */
export declare class TypeT extends SpeakeasyBase {
    arn?: string;
    definition?: string;
    description?: string;
    format?: TypeDefinitionFormatEnum;
    name?: string;
}
