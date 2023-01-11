import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetContentByIdPathParams extends SpeakeasyBase {
    contentId: number;
}
export declare class GetContentByIdRequest extends SpeakeasyBase {
    pathParams: GetContentByIdPathParams;
}
export declare class GetContentByIdResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    fileContent?: Uint8Array;
    statusCode: number;
}
