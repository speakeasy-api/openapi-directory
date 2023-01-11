import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SaveProfilePictureInfoRequest extends SpeakeasyBase {
    request: shared.ProfilePictureInfo;
}
export declare class SaveProfilePictureInfoResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
}
