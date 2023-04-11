import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateAdConfigRequest extends SpeakeasyBase {
    createActiveDirectoryConfigRequest: shared.CreateActiveDirectoryConfigRequest;
    /**
     * Authentication token
     */
    xSdsAuthToken?: string;
}
export declare class CreateAdConfigResponse extends SpeakeasyBase {
    /**
     * Created
     */
    activeDirectoryConfig?: shared.ActiveDirectoryConfig;
    contentType: string;
    /**
     * Bad Request
     */
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
