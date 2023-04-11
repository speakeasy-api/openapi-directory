import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSsoStrategiesIdRequest extends SpeakeasyBase {
    /**
     * Sso Strategy ID.
     */
    id: number;
}
export declare class GetSsoStrategiesIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * The SsoStrategies object.
     */
    ssoStrategyEntity?: shared.SsoStrategyEntity;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
