import { SpeakeasyBase } from "../../../internal/utils";
import { MediaUriTypeEnum } from "./mediauritypeenum";
/**
 * The configuration details that consist of the credentials required (<code>MediaUriSecretArn</code> and <code>MediaUriType</code>) to access the media files that are streamed to the camera.
 */
export declare class MediaSourceConfig extends SpeakeasyBase {
    mediaUriSecretArn: string;
    mediaUriType: MediaUriTypeEnum;
}
