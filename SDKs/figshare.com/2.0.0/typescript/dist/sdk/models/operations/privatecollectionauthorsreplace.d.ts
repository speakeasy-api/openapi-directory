import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PrivateCollectionAuthorsReplacePathParams extends SpeakeasyBase {
    collectionId: number;
}
export declare class PrivateCollectionAuthorsReplaceSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class PrivateCollectionAuthorsReplaceRequest extends SpeakeasyBase {
    pathParams: PrivateCollectionAuthorsReplacePathParams;
    request: shared.AuthorsCreator;
    security: PrivateCollectionAuthorsReplaceSecurity;
}
export declare class PrivateCollectionAuthorsReplaceResponse extends SpeakeasyBase {
    contentType: string;
    errorMessage?: shared.ErrorMessage;
    headers: Record<string, string[]>;
    statusCode: number;
}
