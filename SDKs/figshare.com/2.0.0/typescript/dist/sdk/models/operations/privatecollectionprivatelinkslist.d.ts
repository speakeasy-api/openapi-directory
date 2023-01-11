import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PrivateCollectionPrivateLinksListPathParams extends SpeakeasyBase {
    collectionId: number;
}
export declare class PrivateCollectionPrivateLinksListSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class PrivateCollectionPrivateLinksListRequest extends SpeakeasyBase {
    pathParams: PrivateCollectionPrivateLinksListPathParams;
    security: PrivateCollectionPrivateLinksListSecurity;
}
export declare class PrivateCollectionPrivateLinksListResponse extends SpeakeasyBase {
    contentType: string;
    errorMessage?: shared.ErrorMessage;
    privateLinks?: shared.PrivateLink[];
    statusCode: number;
}
