import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PatchBehaviorsIdRequestBodyAttachmentFile extends SpeakeasyBase {
    attachmentFile: string;
    content: Uint8Array;
}
export declare class PatchBehaviorsIdRequestBody extends SpeakeasyBase {
    /**
     * If true, will delete the file stored in attachment
     */
    attachmentDelete?: boolean;
    /**
     * Certain behaviors may require a file, for instance, the "watermark" behavior requires a watermark image
     */
    attachmentFile?: PatchBehaviorsIdRequestBodyAttachmentFile;
    /**
     * Behavior type.
     */
    behavior?: string;
    /**
     * Description for this behavior.
     */
    description?: string;
    /**
     * Name for this behavior.
     */
    name?: string;
    /**
     * Folder behaviors path.
     */
    path?: string;
    /**
     * The value of the folder behavior.  Can be a integer, array, or hash depending on the type of folder behavior. See The Behavior Types section for example values for each type of behavior.
     */
    value?: string;
}
export declare class PatchBehaviorsIdRequest extends SpeakeasyBase {
    requestBody?: PatchBehaviorsIdRequestBody;
    /**
     * Behavior ID.
     */
    id: number;
}
export declare class PatchBehaviorsIdResponse extends SpeakeasyBase {
    /**
     * The Behaviors object.
     */
    behaviorEntity?: shared.BehaviorEntity;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
