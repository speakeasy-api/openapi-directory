import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ImportationCancelPathParams extends SpeakeasyBase {
    executionId: string;
    storeId: string;
}
export declare class ImportationCancelRequest extends SpeakeasyBase {
    pathParams: ImportationCancelPathParams;
}
export declare class ImportationCancelResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
}
