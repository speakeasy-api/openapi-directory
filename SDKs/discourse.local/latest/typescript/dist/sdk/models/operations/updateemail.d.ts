import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UpdateEmailRequestBody extends SpeakeasyBase {
    email: string;
}
export declare class UpdateEmailRequest extends SpeakeasyBase {
    requestBody?: UpdateEmailRequestBody;
    username: string;
}
export declare class UpdateEmailResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
