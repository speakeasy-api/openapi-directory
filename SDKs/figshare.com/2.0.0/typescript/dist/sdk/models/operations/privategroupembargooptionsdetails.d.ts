import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PrivateGroupEmbargoOptionsDetailsPathParams extends SpeakeasyBase {
    groupId: number;
}
export declare class PrivateGroupEmbargoOptionsDetailsSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class PrivateGroupEmbargoOptionsDetailsRequest extends SpeakeasyBase {
    pathParams: PrivateGroupEmbargoOptionsDetailsPathParams;
    security: PrivateGroupEmbargoOptionsDetailsSecurity;
}
export declare class PrivateGroupEmbargoOptionsDetailsResponse extends SpeakeasyBase {
    contentType: string;
    errorMessage?: shared.ErrorMessage;
    groupEmbargoOptions?: shared.GroupEmbargoOptions[];
    statusCode: number;
}
