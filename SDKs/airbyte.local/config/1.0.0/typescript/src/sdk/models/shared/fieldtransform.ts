/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { FieldAdd } from "./fieldadd";
import { FieldRemove } from "./fieldremove";
import { FieldSchemaUpdate } from "./fieldschemaupdate";
import { Expose, Type } from "class-transformer";

export enum FieldTransformTransformTypeEnum {
  AddField = "add_field",
  RemoveField = "remove_field",
  UpdateFieldSchema = "update_field_schema",
}

/**
 * Describes the difference between two Streams.
 */
export class FieldTransform extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "addField" })
  @Type(() => FieldAdd)
  addField?: FieldAdd;

  @SpeakeasyMetadata()
  @Expose({ name: "breaking" })
  breaking: boolean;

  /**
   * A field name is a list of strings that form the path to the field.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "fieldName" })
  fieldName: string[];

  @SpeakeasyMetadata()
  @Expose({ name: "removeField" })
  @Type(() => FieldRemove)
  removeField?: FieldRemove;

  @SpeakeasyMetadata()
  @Expose({ name: "transformType" })
  transformType: FieldTransformTransformTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "updateFieldSchema" })
  @Type(() => FieldSchemaUpdate)
  updateFieldSchema?: FieldSchemaUpdate;
}
