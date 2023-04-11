import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetCertificatePdfSecurity extends SpeakeasyBase {
    certAuth: string;
}
export declare class GetCertificatePdfResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
