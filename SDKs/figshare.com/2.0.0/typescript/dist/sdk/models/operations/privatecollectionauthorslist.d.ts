import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PrivateCollectionAuthorsListPathParams extends SpeakeasyBase {
    collectionId: number;
}
export declare class PrivateCollectionAuthorsListSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class PrivateCollectionAuthorsListRequest extends SpeakeasyBase {
    pathParams: PrivateCollectionAuthorsListPathParams;
    security: PrivateCollectionAuthorsListSecurity;
}
export declare class PrivateCollectionAuthorsListResponse extends SpeakeasyBase {
    authors?: shared.Author[];
    contentType: string;
    errorMessage?: shared.ErrorMessage;
    statusCode: number;
}
