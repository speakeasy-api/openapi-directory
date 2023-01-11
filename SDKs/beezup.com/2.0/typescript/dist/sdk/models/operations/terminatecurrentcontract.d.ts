import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TerminateCurrentContractRequest extends SpeakeasyBase {
    request: shared.TerminateContract;
}
export declare class TerminateCurrentContractResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
}
