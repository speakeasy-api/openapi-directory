import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCollectionPathParams extends SpeakeasyBase {
    collection: string;
}
export declare class GetCollectionQueryParams extends SpeakeasyBase {
    sharingKey?: string;
}
export declare class GetCollectionSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class GetCollectionRequest extends SpeakeasyBase {
    pathParams: GetCollectionPathParams;
    queryParams: GetCollectionQueryParams;
    security: GetCollectionSecurity;
}
export declare class GetCollectionResponse extends SpeakeasyBase {
    collection?: shared.Collection;
    contentType: string;
    flatErrorResponse?: shared.FlatErrorResponse;
    statusCode: number;
}
