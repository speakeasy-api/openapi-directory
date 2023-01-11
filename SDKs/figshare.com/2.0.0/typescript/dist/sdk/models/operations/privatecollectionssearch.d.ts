import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PrivateCollectionsSearchSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class PrivateCollectionsSearchRequest extends SpeakeasyBase {
    request: shared.PrivateCollectionSearch;
    security: PrivateCollectionsSearchSecurity;
}
export declare class PrivateCollectionsSearchResponse extends SpeakeasyBase {
    collections?: shared.Collection[];
    contentType: string;
    errorMessage?: shared.ErrorMessage;
    statusCode: number;
}
