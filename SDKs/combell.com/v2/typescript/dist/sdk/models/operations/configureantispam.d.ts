import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ConfigureAntiSpamRequest extends SpeakeasyBase {
    /**
     * Contains the anti-spam information.
     */
    updateAntiSpamRequest?: shared.UpdateAntiSpamRequest;
    /**
     * Automatically added
     */
    domainNamePathParameter: string;
    /**
     * Mail zone domain name.
     */
    domainNameQueryParameter: string;
}
export declare class ConfigureAntiSpamResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
