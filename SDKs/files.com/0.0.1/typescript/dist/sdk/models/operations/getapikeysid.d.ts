import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetApiKeysIdRequest extends SpeakeasyBase {
    /**
     * Api Key ID.
     */
    id: number;
}
export declare class GetApiKeysIdResponse extends SpeakeasyBase {
    /**
     * The ApiKeys object.
     */
    apiKeyEntity?: shared.ApiKeyEntity;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
