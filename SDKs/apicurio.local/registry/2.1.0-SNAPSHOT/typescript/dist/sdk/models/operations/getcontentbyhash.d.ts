import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetContentByHashPathParams extends SpeakeasyBase {
    contentHash: string;
}
export declare class GetContentByHashRequest extends SpeakeasyBase {
    pathParams: GetContentByHashPathParams;
}
export declare class GetContentByHashResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    fileContent?: Uint8Array;
    statusCode: number;
}
