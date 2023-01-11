import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetProfilePictureInfoHeaders extends SpeakeasyBase {
    ifNoneMatch?: string;
}
export declare class GetProfilePictureInfoRequest extends SpeakeasyBase {
    headers: GetProfilePictureInfoHeaders;
}
export declare class GetProfilePictureInfoResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    profilePictureInfoResponse?: shared.ProfilePictureInfoResponse;
}
