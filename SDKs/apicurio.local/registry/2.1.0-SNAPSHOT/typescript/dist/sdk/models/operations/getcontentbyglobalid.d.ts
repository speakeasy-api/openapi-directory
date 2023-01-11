import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetContentByGlobalIdPathParams extends SpeakeasyBase {
    globalId: number;
}
export declare class GetContentByGlobalIdRequest extends SpeakeasyBase {
    pathParams: GetContentByGlobalIdPathParams;
}
export declare class GetContentByGlobalIdResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    fileContent?: Uint8Array;
    statusCode: number;
}
