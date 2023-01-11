import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteStoreSharePathParams extends SpeakeasyBase {
    storeId: string;
    userId: string;
}
export declare class DeleteStoreShareRequest extends SpeakeasyBase {
    pathParams: DeleteStoreSharePathParams;
}
export declare class DeleteStoreShareResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
}
