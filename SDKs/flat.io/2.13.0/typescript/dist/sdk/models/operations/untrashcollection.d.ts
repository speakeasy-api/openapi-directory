import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UntrashCollectionPathParams extends SpeakeasyBase {
    collection: string;
}
export declare class UntrashCollectionSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class UntrashCollectionRequest extends SpeakeasyBase {
    pathParams: UntrashCollectionPathParams;
    security: UntrashCollectionSecurity;
}
export declare class UntrashCollectionResponse extends SpeakeasyBase {
    contentType: string;
    flatErrorResponse?: shared.FlatErrorResponse;
    statusCode: number;
}
