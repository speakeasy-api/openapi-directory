import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteCollectionPathParams extends SpeakeasyBase {
    collection: string;
}
export declare class DeleteCollectionSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class DeleteCollectionRequest extends SpeakeasyBase {
    pathParams: DeleteCollectionPathParams;
    security: DeleteCollectionSecurity;
}
export declare class DeleteCollectionResponse extends SpeakeasyBase {
    contentType: string;
    flatErrorResponse?: shared.FlatErrorResponse;
    statusCode: number;
}
