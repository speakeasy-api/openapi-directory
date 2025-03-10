/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { BatchAttachObjectResponse } from "./batchattachobjectresponse";
import { BatchAttachToIndexResponse } from "./batchattachtoindexresponse";
import { BatchAttachTypedLinkResponse } from "./batchattachtypedlinkresponse";
import { BatchCreateIndexResponse } from "./batchcreateindexresponse";
import { BatchCreateObjectResponse } from "./batchcreateobjectresponse";
import { BatchDetachFromIndexResponse } from "./batchdetachfromindexresponse";
import { BatchDetachObjectResponse } from "./batchdetachobjectresponse";
import { BatchUpdateObjectAttributesResponse } from "./batchupdateobjectattributesresponse";
import { Expose, Type } from "class-transformer";

/**
 * Represents the output of a <code>BatchWrite</code> response operation.
 */
export class BatchWriteOperationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "AddFacetToObject" })
  addFacetToObject?: Record<string, any>;

  @SpeakeasyMetadata()
  @Expose({ name: "AttachObject" })
  @Type(() => BatchAttachObjectResponse)
  attachObject?: BatchAttachObjectResponse;

  @SpeakeasyMetadata()
  @Expose({ name: "AttachPolicy" })
  attachPolicy?: Record<string, any>;

  @SpeakeasyMetadata()
  @Expose({ name: "AttachToIndex" })
  @Type(() => BatchAttachToIndexResponse)
  attachToIndex?: BatchAttachToIndexResponse;

  @SpeakeasyMetadata()
  @Expose({ name: "AttachTypedLink" })
  @Type(() => BatchAttachTypedLinkResponse)
  attachTypedLink?: BatchAttachTypedLinkResponse;

  @SpeakeasyMetadata()
  @Expose({ name: "CreateIndex" })
  @Type(() => BatchCreateIndexResponse)
  createIndex?: BatchCreateIndexResponse;

  @SpeakeasyMetadata()
  @Expose({ name: "CreateObject" })
  @Type(() => BatchCreateObjectResponse)
  createObject?: BatchCreateObjectResponse;

  @SpeakeasyMetadata()
  @Expose({ name: "DeleteObject" })
  deleteObject?: Record<string, any>;

  @SpeakeasyMetadata()
  @Expose({ name: "DetachFromIndex" })
  @Type(() => BatchDetachFromIndexResponse)
  detachFromIndex?: BatchDetachFromIndexResponse;

  @SpeakeasyMetadata()
  @Expose({ name: "DetachObject" })
  @Type(() => BatchDetachObjectResponse)
  detachObject?: BatchDetachObjectResponse;

  @SpeakeasyMetadata()
  @Expose({ name: "DetachPolicy" })
  detachPolicy?: Record<string, any>;

  @SpeakeasyMetadata()
  @Expose({ name: "DetachTypedLink" })
  detachTypedLink?: Record<string, any>;

  @SpeakeasyMetadata()
  @Expose({ name: "RemoveFacetFromObject" })
  removeFacetFromObject?: Record<string, any>;

  @SpeakeasyMetadata()
  @Expose({ name: "UpdateLinkAttributes" })
  updateLinkAttributes?: Record<string, any>;

  @SpeakeasyMetadata()
  @Expose({ name: "UpdateObjectAttributes" })
  @Type(() => BatchUpdateObjectAttributesResponse)
  updateObjectAttributes?: BatchUpdateObjectAttributesResponse;
}
