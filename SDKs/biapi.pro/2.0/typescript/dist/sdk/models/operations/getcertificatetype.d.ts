import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetCertificateTypeRequest extends SpeakeasyBase {
    expand?: string;
    type: string;
}
export declare class GetCertificateTypeResponse extends SpeakeasyBase {
    /**
     * Successful GET on Certificate resource
     */
    certificate?: shared.Certificate;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
