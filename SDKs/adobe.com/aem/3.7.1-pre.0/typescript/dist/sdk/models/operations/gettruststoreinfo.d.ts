import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetTruststoreInfoResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Retrieved AEM Truststore info
     */
    truststoreInfo?: shared.TruststoreInfo;
    /**
     * Default response
     */
    getTruststoreInfoDefaultApplicationJSONString?: string;
}
