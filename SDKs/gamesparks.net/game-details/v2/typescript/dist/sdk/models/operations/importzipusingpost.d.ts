import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ImportZipUsingPOSTRequestBodyFile extends SpeakeasyBase {
    content: Uint8Array;
    file: string;
}
export declare class ImportZipUsingPOSTRequestBody extends SpeakeasyBase {
    /**
     * file
     */
    file: ImportZipUsingPOSTRequestBodyFile;
}
export declare class ImportZipUsingPOSTRequest extends SpeakeasyBase {
    requestBody: ImportZipUsingPOSTRequestBody;
    /**
     * apiKey
     */
    apiKey: string;
}
export declare class ImportZipUsingPOSTResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * json error
     */
    messageModel?: shared.MessageModel;
    /**
     * OK
     */
    scriptsDifferenceListModel?: shared.ScriptsDifferenceListModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
