import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCreditsIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetCreditsId200ApplicationVndApiPlusJson extends SpeakeasyBase {
    data?: shared.Credit;
    links?: shared.ResourceLink;
}
export declare class GetCreditsIdRequest extends SpeakeasyBase {
    pathParams: GetCreditsIdPathParams;
}
export declare class GetCreditsIdResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    getCreditsId200ApplicationVndApiPlusJsonObject?: GetCreditsId200ApplicationVndApiPlusJson;
}
