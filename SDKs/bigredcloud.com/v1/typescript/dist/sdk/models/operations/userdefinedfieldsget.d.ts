import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UserDefinedFieldsGetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    pageResultUserDefinedFieldDto?: shared.PageResultUserDefinedFieldDto;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
