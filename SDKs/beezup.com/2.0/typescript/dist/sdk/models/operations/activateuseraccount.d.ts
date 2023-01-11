import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ActivateUserAccountRequest extends SpeakeasyBase {
    request: string;
}
export declare class ActivateUserAccountResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
}
