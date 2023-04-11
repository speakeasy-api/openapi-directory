import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GitignoreGetTemplateRequest extends SpeakeasyBase {
    name: string;
}
export declare class GitignoreGetTemplateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    gitignoreTemplate?: shared.GitignoreTemplate;
}
