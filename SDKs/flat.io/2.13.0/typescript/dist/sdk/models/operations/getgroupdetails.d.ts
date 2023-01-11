import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetGroupDetailsPathParams extends SpeakeasyBase {
    group: string;
}
export declare class GetGroupDetailsSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class GetGroupDetailsRequest extends SpeakeasyBase {
    pathParams: GetGroupDetailsPathParams;
    security: GetGroupDetailsSecurity;
}
export declare class GetGroupDetailsResponse extends SpeakeasyBase {
    contentType: string;
    flatErrorResponse?: shared.FlatErrorResponse;
    groupDetails?: shared.GroupDetails;
    statusCode: number;
}
