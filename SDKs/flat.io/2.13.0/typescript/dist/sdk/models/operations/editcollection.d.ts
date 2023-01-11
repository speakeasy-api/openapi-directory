import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EditCollectionPathParams extends SpeakeasyBase {
    collection: string;
}
export declare class EditCollectionSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class EditCollectionRequest extends SpeakeasyBase {
    pathParams: EditCollectionPathParams;
    request?: shared.CollectionModification;
    security: EditCollectionSecurity;
}
export declare class EditCollectionResponse extends SpeakeasyBase {
    collection?: shared.Collection;
    contentType: string;
    flatErrorResponse?: shared.FlatErrorResponse;
    statusCode: number;
}
