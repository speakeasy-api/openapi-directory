import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateResourceByIdPathParams extends SpeakeasyBase {
    id: number;
}
export declare class UpdateResourceByIdHeaders extends SpeakeasyBase {
    evAccessToken: string;
    evApiKey: string;
}
export declare class UpdateResourceByIdUpdateResourceByIdRequestBody extends SpeakeasyBase {
    name?: string;
}
export declare class UpdateResourceByIdRequest extends SpeakeasyBase {
    pathParams: UpdateResourceByIdPathParams;
    headers: UpdateResourceByIdHeaders;
    request?: UpdateResourceByIdUpdateResourceByIdRequestBody;
}
export declare class UpdateResourceByIdResponse extends SpeakeasyBase {
    contentType: string;
    resourceResponse?: shared.ResourceResponse;
    statusCode: number;
}
