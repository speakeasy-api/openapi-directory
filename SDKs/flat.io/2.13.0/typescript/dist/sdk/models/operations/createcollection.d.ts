import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateCollectionSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class CreateCollectionResponse extends SpeakeasyBase {
    /**
     * Collection created
     */
    collection?: shared.Collection;
    contentType: string;
    /**
     * Bad collection creation request
     */
    flatErrorResponse?: shared.FlatErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
