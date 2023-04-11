import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostBehaviorsRequestBodyAttachmentFile extends SpeakeasyBase {
    attachmentFile: string;
    content: Uint8Array;
}
export declare class PostBehaviorsRequestBody extends SpeakeasyBase {
    /**
     * Certain behaviors may require a file, for instance, the "watermark" behavior requires a watermark image
     */
    attachmentFile?: PostBehaviorsRequestBodyAttachmentFile;
    /**
     * Behavior type.
     */
    behavior: string;
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
    path: string;
    /**
     * The value of the folder behavior.  Can be a integer, array, or hash depending on the type of folder behavior. See The Behavior Types section for example values for each type of behavior.
     */
    value?: string;
}
export declare class PostBehaviorsResponse extends SpeakeasyBase {
    /**
     * The Behaviors object.
     */
    behaviorEntity?: shared.BehaviorEntity;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
