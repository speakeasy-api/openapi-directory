/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { DocumentClassifierProperties } from "./documentclassifierproperties";
import { Expose, Type } from "class-transformer";

/**
 * Success
 */
export class ListDocumentClassifiersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: DocumentClassifierProperties })
  @Expose({ name: "DocumentClassifierPropertiesList" })
  @Type(() => DocumentClassifierProperties)
  documentClassifierPropertiesList?: DocumentClassifierProperties[];

  @SpeakeasyMetadata()
  @Expose({ name: "NextToken" })
  nextToken?: string;
}
