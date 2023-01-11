import { SpeakeasyBase } from "../../../internal/utils";
import { BatchAttachObjectResponse } from "./batchattachobjectresponse";
import { BatchAttachToIndexResponse } from "./batchattachtoindexresponse";
import { BatchAttachTypedLinkResponse } from "./batchattachtypedlinkresponse";
import { BatchCreateIndexResponse } from "./batchcreateindexresponse";
import { BatchCreateObjectResponse } from "./batchcreateobjectresponse";
import { BatchDetachFromIndexResponse } from "./batchdetachfromindexresponse";
import { BatchDetachObjectResponse } from "./batchdetachobjectresponse";
import { BatchUpdateObjectAttributesResponse } from "./batchupdateobjectattributesresponse";
/**
 * Represents the output of a <code>BatchWrite</code> response operation.
**/
export declare class BatchWriteOperationResponse extends SpeakeasyBase {
    addFacetToObject?: Record<string, any>;
    attachObject?: BatchAttachObjectResponse;
    attachPolicy?: Record<string, any>;
    attachToIndex?: BatchAttachToIndexResponse;
    attachTypedLink?: BatchAttachTypedLinkResponse;
    createIndex?: BatchCreateIndexResponse;
    createObject?: BatchCreateObjectResponse;
    deleteObject?: Record<string, any>;
    detachFromIndex?: BatchDetachFromIndexResponse;
    detachObject?: BatchDetachObjectResponse;
    detachPolicy?: Record<string, any>;
    detachTypedLink?: Record<string, any>;
    removeFacetFromObject?: Record<string, any>;
    updateLinkAttributes?: Record<string, any>;
    updateObjectAttributes?: BatchUpdateObjectAttributesResponse;
}
