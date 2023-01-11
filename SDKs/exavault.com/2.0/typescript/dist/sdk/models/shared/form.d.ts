import { SpeakeasyBase } from "../../../internal/utils";
import { FormAttributes } from "./formattributes";
export declare enum FormRelationshipsShareDataTypeEnum {
    Share = "share"
}
export declare class FormRelationshipsShareData extends SpeakeasyBase {
    id?: number;
    type?: FormRelationshipsShareDataTypeEnum;
}
export declare class FormRelationshipsShare extends SpeakeasyBase {
    data?: FormRelationshipsShareData;
}
/**
 * Share relationship data of the form.
**/
export declare class FormRelationships extends SpeakeasyBase {
    share?: FormRelationshipsShare;
}
/**
 * Regular form object.
**/
export declare class Form extends SpeakeasyBase {
    attributes?: FormAttributes;
    id?: number;
    relationships?: FormRelationships;
    type?: string;
}
