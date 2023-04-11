import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateRadiusConfigRequest extends SpeakeasyBase {
    radiusConfigCreateRequest: shared.RadiusConfigCreateRequest;
    /**
     * Authentication token
     */
    xSdsAuthToken?: string;
}
export declare class CreateRadiusConfigResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad Request
     */
    errorResponse?: shared.ErrorResponse;
    /**
     * Created
     */
    radiusConfig?: shared.RadiusConfig;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
