import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PrivateAuthorsSearchSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class PrivateAuthorsSearchRequest extends SpeakeasyBase {
    request?: shared.PrivateAuthorsSearch;
    security: PrivateAuthorsSearchSecurity;
}
export declare class PrivateAuthorsSearchResponse extends SpeakeasyBase {
    authors?: shared.Author[];
    contentType: string;
    errorMessage?: shared.ErrorMessage;
    statusCode: number;
}
