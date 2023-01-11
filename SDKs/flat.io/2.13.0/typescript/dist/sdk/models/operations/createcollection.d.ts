import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateCollectionSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class CreateCollectionRequest extends SpeakeasyBase {
    request: shared.CollectionCreation;
    security: CreateCollectionSecurity;
}
export declare class CreateCollectionResponse extends SpeakeasyBase {
    collection?: shared.Collection;
    contentType: string;
    flatErrorResponse?: shared.FlatErrorResponse;
    statusCode: number;
}
