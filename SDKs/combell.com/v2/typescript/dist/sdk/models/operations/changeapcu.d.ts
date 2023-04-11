import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ChangeApcuRequest extends SpeakeasyBase {
    /**
     * Php APcu config
     */
    updatePhpAPcuRequest?: shared.UpdatePhpAPcuRequest;
    /**
     * Automatically added
     */
    domainNamePathParameter: string;
    /**
     * Linux hosting domain name
     */
    domainNameQueryParameter: string;
}
export declare class ChangeApcuResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
