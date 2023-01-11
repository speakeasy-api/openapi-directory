import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FormAttributes } from "./formattributes";


export enum FormRelationshipsShareDataTypeEnum {
    Share = "share"
}


export class FormRelationshipsShareData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: FormRelationshipsShareDataTypeEnum;
}


export class FormRelationshipsShare extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: FormRelationshipsShareData;
}


// FormRelationships
/** 
 * Share relationship data of the form. 
**/
export class FormRelationships extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=share" })
  share?: FormRelationshipsShare;
}


// Form
/** 
 * Regular form object.
**/
export class Form extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributes" })
  attributes?: FormAttributes;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=relationships" })
  relationships?: FormRelationships;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
