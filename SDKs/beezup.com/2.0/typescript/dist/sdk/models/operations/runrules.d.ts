import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RunRulesPathParams extends SpeakeasyBase {
    storeId: string;
}
export declare class RunRulesRequest extends SpeakeasyBase {
    pathParams: RunRulesPathParams;
}
export declare class RunRulesResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
}
