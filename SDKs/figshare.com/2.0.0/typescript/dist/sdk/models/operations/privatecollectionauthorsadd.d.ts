import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PrivateCollectionAuthorsAddPathParams extends SpeakeasyBase {
    collectionId: number;
}
export declare class PrivateCollectionAuthorsAddSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class PrivateCollectionAuthorsAddRequest extends SpeakeasyBase {
    pathParams: PrivateCollectionAuthorsAddPathParams;
    request: shared.AuthorsCreator;
    security: PrivateCollectionAuthorsAddSecurity;
}
export declare class PrivateCollectionAuthorsAddResponse extends SpeakeasyBase {
    contentType: string;
    errorMessage?: shared.ErrorMessage;
    headers: Record<string, string[]>;
    location?: shared.Location;
    statusCode: number;
}
