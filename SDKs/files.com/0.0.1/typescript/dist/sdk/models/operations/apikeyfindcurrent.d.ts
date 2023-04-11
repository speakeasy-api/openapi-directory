import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ApiKeyFindCurrentResponse extends SpeakeasyBase {
    /**
     * The ApiKey object.
     */
    apiKeyEntity?: shared.ApiKeyEntity;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
