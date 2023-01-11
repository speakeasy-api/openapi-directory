import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteProductPathParams extends SpeakeasyBase {
    id: number;
}
export declare class DeleteProductRequest extends SpeakeasyBase {
    pathParams: DeleteProductPathParams;
}
export declare class DeleteProductResponse extends SpeakeasyBase {
    clientErrorResponse?: shared.ClientErrorResponse;
    contentType: string;
    headers: Record<string, string[]>;
    serverErrorResponse?: shared.ServerErrorResponse;
    statusCode: number;
}
