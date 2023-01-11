import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BatchAttachObjectResponse } from "./batchattachobjectresponse";
import { BatchAttachToIndexResponse } from "./batchattachtoindexresponse";
import { BatchAttachTypedLinkResponse } from "./batchattachtypedlinkresponse";
import { BatchCreateIndexResponse } from "./batchcreateindexresponse";
import { BatchCreateObjectResponse } from "./batchcreateobjectresponse";
import { BatchDetachFromIndexResponse } from "./batchdetachfromindexresponse";
import { BatchDetachObjectResponse } from "./batchdetachobjectresponse";
import { BatchUpdateObjectAttributesResponse } from "./batchupdateobjectattributesresponse";



// BatchWriteOperationResponse
/** 
 * Represents the output of a <code>BatchWrite</code> response operation.
**/
export class BatchWriteOperationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AddFacetToObject" })
  addFacetToObject?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=AttachObject" })
  attachObject?: BatchAttachObjectResponse;

  @SpeakeasyMetadata({ data: "json, name=AttachPolicy" })
  attachPolicy?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=AttachToIndex" })
  attachToIndex?: BatchAttachToIndexResponse;

  @SpeakeasyMetadata({ data: "json, name=AttachTypedLink" })
  attachTypedLink?: BatchAttachTypedLinkResponse;

  @SpeakeasyMetadata({ data: "json, name=CreateIndex" })
  createIndex?: BatchCreateIndexResponse;

  @SpeakeasyMetadata({ data: "json, name=CreateObject" })
  createObject?: BatchCreateObjectResponse;

  @SpeakeasyMetadata({ data: "json, name=DeleteObject" })
  deleteObject?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=DetachFromIndex" })
  detachFromIndex?: BatchDetachFromIndexResponse;

  @SpeakeasyMetadata({ data: "json, name=DetachObject" })
  detachObject?: BatchDetachObjectResponse;

  @SpeakeasyMetadata({ data: "json, name=DetachPolicy" })
  detachPolicy?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=DetachTypedLink" })
  detachTypedLink?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=RemoveFacetFromObject" })
  removeFacetFromObject?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=UpdateLinkAttributes" })
  updateLinkAttributes?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=UpdateObjectAttributes" })
  updateObjectAttributes?: BatchUpdateObjectAttributesResponse;
}
