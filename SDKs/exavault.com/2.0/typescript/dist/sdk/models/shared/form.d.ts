import { SpeakeasyBase } from "../../../internal/utils";
import { FormAttributes } from "./formattributes";
/**
 * Type is share.
 */
export declare enum FormRelationshipsShareDataTypeEnum {
    Share = "share"
}
export declare class FormRelationshipsShareData extends SpeakeasyBase {
    /**
     * ID of the share.
     */
    id?: number;
    /**
     * Type is share.
     */
    type?: FormRelationshipsShareDataTypeEnum;
}
export declare class FormRelationshipsShare extends SpeakeasyBase {
    data?: FormRelationshipsShareData;
}
/**
 * Share relationship data of the form.
 */
export declare class FormRelationships extends SpeakeasyBase {
    share?: FormRelationshipsShare;
}
/**
 * Regular form object.
 */
export declare class Form extends SpeakeasyBase {
    /**
     * Attributes of the form including it's included fields and css styles
     */
    attributes?: FormAttributes;
    /**
     * ID of the form.
     */
    id?: number;
    /**
     * Share relationship data of the form.
     */
    relationships?: FormRelationships;
    /**
     * Type is "form".
     */
    type?: string;
}
