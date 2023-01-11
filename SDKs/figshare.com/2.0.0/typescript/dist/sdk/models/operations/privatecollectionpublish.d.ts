import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PrivateCollectionPublishPathParams extends SpeakeasyBase {
    collectionId: number;
}
export declare class PrivateCollectionPublishSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class PrivateCollectionPublishRequest extends SpeakeasyBase {
    pathParams: PrivateCollectionPublishPathParams;
    security: PrivateCollectionPublishSecurity;
}
export declare class PrivateCollectionPublishResponse extends SpeakeasyBase {
    contentType: string;
    errorMessage?: shared.ErrorMessage;
    headers: Record<string, string[]>;
    location?: shared.Location;
    statusCode: number;
}
