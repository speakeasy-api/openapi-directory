import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteStorePathParams extends SpeakeasyBase {
    storeId: string;
}
export declare class DeleteStoreRequest extends SpeakeasyBase {
    pathParams: DeleteStorePathParams;
}
export declare class DeleteStoreResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
}
