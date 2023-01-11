import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ConfigureAutomaticTransitionsRequest extends SpeakeasyBase {
    request: shared.ConfigureAutomaticTransitionRequest;
}
export declare class ConfigureAutomaticTransitionsResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
}
