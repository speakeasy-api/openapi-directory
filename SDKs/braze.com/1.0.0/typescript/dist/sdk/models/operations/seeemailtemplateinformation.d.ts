import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SeeEmailTemplateInformationRequest extends SpeakeasyBase {
    /**
     * (Required) String
     *
     * @remarks
     *
     * Your email template's API Identifier.
     */
    emailTemplateId?: string;
}
export declare class SeeEmailTemplateInformationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
