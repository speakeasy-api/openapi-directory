import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateRulePathParams extends SpeakeasyBase {
    storeId: string;
}
export declare class CreateRuleRequest extends SpeakeasyBase {
    pathParams: CreateRulePathParams;
    request: shared.CreateRuleRequest;
}
export declare class CreateRuleResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
