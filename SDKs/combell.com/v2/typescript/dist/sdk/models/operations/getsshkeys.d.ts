import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSshKeysRequest extends SpeakeasyBase {
    /**
     * Automatically added
     */
    domainNamePathParameter: string;
    /**
     * Linux hosting domain name.
     */
    domainNameQueryParameter: string;
}
export declare class GetSshKeysResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    sshKeys?: shared.SshKey[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
