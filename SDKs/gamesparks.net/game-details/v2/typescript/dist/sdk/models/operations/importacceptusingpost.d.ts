import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ImportAcceptUsingPOSTRequestBodyFile extends SpeakeasyBase {
    content: Uint8Array;
    file: string;
}
export declare class ImportAcceptUsingPOSTRequestBody extends SpeakeasyBase {
    /**
     * file
     */
    file: ImportAcceptUsingPOSTRequestBodyFile;
}
export declare class ImportAcceptUsingPOSTRequest extends SpeakeasyBase {
    requestBody: ImportAcceptUsingPOSTRequestBody;
    /**
     * apiKey
     */
    apiKey: string;
    /**
     * body
     */
    body: string;
}
export declare class ImportAcceptUsingPOSTResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    messageModel?: shared.MessageModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
