import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetPsd2RegistrationsIdPsd2RegistrationRequest extends SpeakeasyBase {
    expand?: string;
    idPsd2Registration: number;
}
export declare class GetPsd2RegistrationsIdPsd2RegistrationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful GET on Psd2Registration resource
     */
    psd2Registration?: shared.Psd2Registration;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
