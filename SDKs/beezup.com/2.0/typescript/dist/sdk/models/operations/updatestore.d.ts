import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateStorePathParams extends SpeakeasyBase {
    storeId: string;
}
export declare class UpdateStoreRequest extends SpeakeasyBase {
    pathParams: UpdateStorePathParams;
    request: shared.UpdateStoreRequest;
}
export declare class UpdateStoreResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
}
