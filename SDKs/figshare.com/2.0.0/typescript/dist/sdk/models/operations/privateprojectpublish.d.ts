import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PrivateProjectPublishPathParams extends SpeakeasyBase {
    projectId: number;
}
export declare class PrivateProjectPublishSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class PrivateProjectPublishRequest extends SpeakeasyBase {
    pathParams: PrivateProjectPublishPathParams;
    security: PrivateProjectPublishSecurity;
}
export declare class PrivateProjectPublishResponse extends SpeakeasyBase {
    contentType: string;
    errorMessage?: shared.ErrorMessage;
    responseMessage?: shared.ResponseMessage;
    statusCode: number;
}
