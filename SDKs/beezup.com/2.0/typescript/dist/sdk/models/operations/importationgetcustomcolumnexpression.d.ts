import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ImportationGetCustomColumnExpressionPathParams extends SpeakeasyBase {
    columnId: string;
    executionId: string;
    storeId: string;
}
export declare class ImportationGetCustomColumnExpressionRequest extends SpeakeasyBase {
    pathParams: ImportationGetCustomColumnExpressionPathParams;
}
export declare class ImportationGetCustomColumnExpressionResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    importationGetCustomColumnExpression200ApplicationJSONString?: string;
    statusCode: number;
}
